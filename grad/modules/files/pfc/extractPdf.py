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

def getRelevantPages(wrk_dir,pdf_path,prefix):
    pdfFile=open(wrk_dir+pdf_path,'rb')
    pdf=PyPDF2.PdfFileReader(pdfFile)
    rlvPagesList =[pdf.getPage(0),pdf.getPage(1),pdf.getPage(2)]
    stopIndex = int(pdf.getNumPages()/3)
    for i in range(3,stopIndex):
        tmpPage = pdf.getPage(i)
        txt2Search = tmpPage.extractText()
        if pattr_res.search(txt2Search)!= None:
            rlvPagesList.append(pdf.getPage(i))
            rlvPagesList.append(pdf.getPage(i+1))
            break 
    newPdfFile = open(wrk_dir+prefix+pdf_path,'wb')
    pdfWriter = PyPDF2.PdfFileWriter()
    for pg in rlvPagesList:
        pdfWriter.addPage(pg)
    pdfWriter.write(newPdfFile)
    pdfFile.close()
    newPdfFile.close()


def delete_ppms(wrk_dir):
  for file in os.listdir(wrk_dir):
    if '.ppm' in file or '.DS_Store' in file:
      try:
          os.remove(wrk_dir + file)
      except FileNotFoundError:
          pass

def pdf_extract(file_path, wrk_dir,i):
  print("extracting from file:", file_path)
  images = pdf2image.convert_from_path(wrk_dir + file_path, output_folder=wrk_dir)
  j = 0
  for file in sorted (os.listdir(wrk_dir)):
      if '.ppm' in file and 'image' not in file:
        os.rename(wrk_dir + file, wrk_dir + 'image' + str(i) + '-' + str(j) + '.ppm')
        j += 1
  j = 0
  files = [f for f in os.listdir(wrk_dir) if '.ppm' in f]
  list_str=[]
  for file in sorted(files, key=lambda x: int(x[x.index('-') + 1: x.index('.')])):
      temp = pytesseract.image_to_string(Image.open(wrk_dir + file))
      list_str.append(temp)  
  delete_ppms(wrk_dir)
  
  return list_str


def getPfcContents(lst_str):
  
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
  start_index = pattr_res.search(resInfo).end()
  resStr=resInfo[start_index:]
  absInfo=lst_str[4]
  start_index = pattr_abs.search(absInfo).end()
  absStr=absInfo[start_index:]
  data={'numero':'','titulo':title_str,'autor':auths,'orientador':orient,'ano':int(ano),'resumo_pt':resStr,'resumo_en':absStr}     
  return data


def extractPfcFromDir(wrk_dir,json_data):
  pdf_files=[]
  for f in os.listdir(wrk_dir):
    full_name = os.path.join(wrk_dir, f) 
    if os.path.isfile(full_name):
      name = os.path.basename(f)
      filename, ext = os.path.splitext(name)
      if ext == '.pdf':
        pdf_files.append(name)
  pref='temp_'
  for pdf in pdf_files:
    getRelevantPages(wrk_dir,pdf,pref)  
    strContent = pdf_extract(pref+pdf,wrk_dir,0)
    data=[]
    try:
      os.remove(wrk_dir+pref+pdf)
    except FileNotFoundError:
      pass
    if strContent[0]!='\x0c':
      data = getPfcContents(strContent)
      data['file']=wrk_dir+pdf
    else:
      data={'numero':'','titulo':'Inserir manualmente','autor':'Inserir Manualmente','orientador':'Inserir Manualmente','ano':'Inserir Manualmente','resumo_pt':'Inserir manualmente','resumo_en':'Inserir manualmente','file':wrk_dir+pdf}
      
    json_data.append(data)
      
    

json_data=[]

for d in os.listdir(base_dir):
  if os.path.isdir(d):
    ano_dir = os.path.basename(d)
    print(ano_dir)
    extractPfcFromDir(base_dir+'/'+ano_dir+'/',json_data)
json_obj=json.dumps(json_data,indent=10)
with open(tb_dir+"tb_aux_pfc.json","w") as outfile:
  outfile.write(json_obj)
  