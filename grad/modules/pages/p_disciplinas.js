
//data file
//useDataResource('tb-areaconcentracao.js');
useDataResource('tb-disciplina-grad.js');


//texts in page
var pdisciplinas_txt_br = {
  'head': "Disciplinas da Graduação",
  'label': "Disciplinas",
  'par-01': "As disciplinas estão organizadas de acordo com ano na qual é ofertada e período.",
  'par-02': "",
  
}

var pdisciplinas_txt_en = {
  'head': "Rearch and Structure",
  'label': "Research",
  'par-01': "The Graduate Program in Systems and Computing has",
  'par-02': "the following Research Major:",
}


var PDISCIPLINAS = function() {
  this.langTxt = ( getLang() == 0 ) ? pdisciplinas_txt_br : pdisciplinas_txt_en;
  this.contentTitle = this.langTxt['head'];
};

PDISCIPLINAS.prototype = {
  label: function() {
      return this.langTxt['label'];
  },

  recAreas: function() {
      var retorno = this.langTxt['par-01'] + ' ';
      return retorno;
  },

  recDistinctAnos: function(){
    var retorno = '';

    var result = alasql('SELECT DISTINCT ano FROM ? ORDER BY ano ',[disciplinas_grad]);
      let it = result[Symbol.iterator]();
      var anItem = it.next();

      while (!anItem.done) {
        
        retorno += '<option value="'+ anItem.value.ano +'">'+anItem.value.ano +'º Ano'+'</option>';
        anItem = it.next();
      }

      return retorno;
  },

  getSelectList: function(){
    var retorno ='';
    
    retorno+='<div><p>Ano:</p><select name="ano" id="ano_filter" onchange="selectAnoDisciplina()">'+this.recDistinctAnos()+'</select><br><br>';
    
    return retorno;
  },
  defaultDisciGrid:function(){
    var retorno = '';
  
    var result = alasql('SELECT * FROM ? WHERE ano = 3 ORDER BY periodo',[disciplinas_grad]);
    let it = result[Symbol.iterator]();
    var anItem = it.next();
    retorno+='<p><strong>1º Período<strong></p><br>';
    var flag=0;
    while (!anItem.done) {
      
      if(!flag && anItem.value.periodo>1){
        flag=1;
        retorno+='<p><strong>2º Período<strong></p><br>';
      }
      retorno += '<p><strong>' + anItem.value.nome[getLang()].toUpperCase() + '</strong><br />' + anItem.value.desc + '</p>';
      anItem = it.next();
    }
    
    return retorno;
  },


  conteudo: function() {
      // calculations...
      var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.recAreas() + '</p><p>';
      dContent+=this.getSelectList()+'<div id="grid_disciplinas">';
      dContent += this.defaultDisciGrid()+'</div>';
      dContent += '</div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

      return dContent;
  }
};


function getDisciplinasByAno(ano_selec){
  var retorno = '';
  console.log("ano selec"+ano_selec);
  var result = alasql('SELECT * FROM ? WHERE ano = ? ORDER BY periodo',[disciplinas_grad,ano_selec]);
  console.log(result);
  let it = result[Symbol.iterator]();
  var anItem = it.next();
  retorno+='<p><strong>1º Período<strong></p><br>';
  var flag=0;
  while (!anItem.done) {
    
    if(!flag && anItem.value.periodo>1){
      flag=1;
      retorno+='<p><strong>2º Período<strong></p><br>';
    }
    retorno += '<p><strong>' + anItem.value.nome[getLang()].toUpperCase() + '</strong><br />' + anItem.value.desc + '</p>';
    anItem = it.next();
  }

  return retorno;
}


function selectAnoDisciplina(){
  let ano_selec = document.getElementById("ano_filter").value;
  let newBody= getDisciplinasByAno(ano_selec);
  document.getElementById("grid_disciplinas").innerHTML=newBody;
}