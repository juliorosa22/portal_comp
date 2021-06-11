import json
import PyPDF2
import pdf2image
import os, sys
from PIL import Image
import pytesseract
import re

base_dir = os.getcwd()
tb_dir = '/home/julio_rosa/portal/graduacao_new/portal_comp/grad/modules/database/'
pattr_res = re.compile('RESUMO',re.IGNORECASE)
pattr_abs = re.compile('ABSTRACT',re.IGNORECASE)
pattr_ime=re.compile('INSTITUTO MILITAR DE ENGENHARIA',re.IGNORECASE)
pattr_rj=re.compile('RIO DE JANEIRO',re.IGNORECASE)
pattr_orient = re.compile('Orientador',re.IGNORECASE)

pattr_comp=re.compile('Computa',re.IGNORECASE)
pattr_eng=re.compile('Engenharia',re.IGNORECASE)
pattr_dep = re.compile('Departamento',re.IGNORECASE)
pattr_grad = re.compile('Gradua',re.IGNORECASE)
pattr_ano = re.compile('\d\d\d\d')


def extractTxtFromPdf(file_path,wrk_dir):
  imgList=pdf2image.convert_from_path(wrk_dir + file_path,first_page=1,last_page=15)
  txtList=[pytesseract.image_to_string(imgList[0]),pytesseract.image_to_string(imgList[1]),pytesseract.image_to_string(imgList[2])]
  for i in range(3,len(imgList)-1):
    txt = pytesseract.image_to_string(imgList[i])
    if pattr_res.search(txt)!=None:
      txtList.append(txt)
      txtList.append(pytesseract.image_to_string(imgList[i+1]))
      break
  if len(txtList) < 5:
    txtList.append('Inserir Manualmente')
    txtList.append('Inserir Manualmente')
  return txtList


def getRelevantInfos(lst_str):
  
  strAuthors=lst_str[0]
  ## Pega os nomes dos Discente, titulo e ano
  start_index = pattr_ime.search(strAuthors).end()
  end_index = pattr_rj.search(strAuthors).start()
  strAuthors=strAuthors[start_index:end_index].split('\n')
  list_infos1=[]
  for s in strAuthors:
    if s!='' and pattr_grad.search(s)==None and pattr_comp.search(s)==None and pattr_eng.search(s)==None and pattr_dep.search(s)==None:
      list_infos1.append(s)
  N =len(list_infos1)
  
  auths=[]
  title=[]
  if N <3:
    auths.append(list_infos1[0])
    title.append(list_infos1[1])
  elif N==3:
    auths.append(list_infos1[0])
    if len(list_infos1[2])<20:
      title.append(list_infos1[1])
    else:
      auths.append(list_infos1[1])
    title.append(list_infos1[2])
  else:
    auths.append(list_infos1[0])
    auths.append(list_infos1[1])
    for i in range(2,N):
      title.append(list_infos1[i])
  
  title_str=''
  for s in title:
    title_str+=s+' '

  
  ano = pattr_ano.search(lst_str[0][end_index:]).group()

  orientInfo1=lst_str[1]
  orientInfo2=lst_str[2]

  start_index,end_index=0,0
  strOrient=''
  
  if pattr_rj.search(orientInfo1)!=None and pattr_orient.search(orientInfo1)!=None:
    if pattr_rj.search(orientInfo1).start() > pattr_orient.search(orientInfo1).start():
      start_index=pattr_orient.search(orientInfo1).start()
      end_index=pattr_rj.search(orientInfo1).start()
      strOrient=orientInfo1[start_index:end_index]

  if pattr_rj.search(orientInfo2)!=None and pattr_orient.search(orientInfo2)!=None:
    if pattr_rj.search(orientInfo2).start() > pattr_orient.search(orientInfo2).start():
        start_index=pattr_orient.search(orientInfo2).start()
        end_index=pattr_rj.search(orientInfo2).start()
        strOrient=orientInfo2[start_index:end_index]
  list_str =strOrient.split('\n')
  orient=''
  for s in list_str:
    if s!='' and len(s)>5:
      orient+=s+', '
  resInfo=lst_str[3]
  absInfo=lst_str[4]
  
  if pattr_res.search(resInfo)!=None:
    start_index = pattr_res.search(resInfo).end()
    resInfo=resInfo[start_index:]
    start_index = pattr_abs.search(absInfo).end()
    absInfo=absInfo[start_index:]
  data={'numero':'','titulo':title_str,'autor':auths,'orientador':orient,'ano':int(ano),'resumo_pt':resInfo,'resumo_en':absInfo}     
  return data

    
def getPFCData(wrk_dir,json_data):
  pdf_files=[]
  for f in os.listdir(wrk_dir):
    full_name = os.path.join(wrk_dir, f) 
    if os.path.isfile(full_name):
      name = os.path.basename(f)
      filename, ext = os.path.splitext(name)
      if ext == '.pdf':
        pdf_files.append(name)
  
  for pdf in pdf_files:
    print(f'Pdf File: {pdf}')
    strContent = extractTxtFromPdf(pdf,wrk_dir)
    data=[]
    data = getRelevantInfos(strContent)
    data['file']=wrk_dir+pdf  
    json_data.append(data)




json_data=[]

for d in os.listdir(base_dir):
  if os.path.isdir(d):
    ano_dir = os.path.basename(d)
    print(f'Ano: {ano_dir}')
    getPFCData(base_dir+'/'+ano_dir+'/',json_data)
json_obj=json.dumps(json_data,indent=10)
with open(tb_dir+"tb_aux_pfc.json","w") as outfile:
  outfile.write(json_obj)
  