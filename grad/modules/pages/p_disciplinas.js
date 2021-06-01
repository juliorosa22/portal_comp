
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
    /*
      var result = alasql('SELECT COUNT(codigo) as num FROM ? WHERE ativa=1',[area_concentracao]);
      let it = result[Symbol.iterator]();
      var anItem = it.next();
    
      var qtdAreas = anItem.value.num;
      if (qtdAreas == 1) retorno += this.langTxt['par-02'] + ' ';
      else retorno += this.langTxt['par-03'] + ' ';

      result = alasql('SELECT nome FROM ? WHERE ativa=1 ORDER BY nome',[area_concentracao]);
      it = result[Symbol.iterator]();
      anItem = it.next();

      while (!anItem.done) {
        retorno += '<span style="font-weight:bold;">' + anItem.value.nome[getLang()] + '</span>, ';
        anItem = it.next();
      }

      retorno = retorno.substring(0, retorno.length-2) + '.';
      */
      return retorno;
  },

  recDistinctAnos: function(){
    var retorno = '';

    var result = alasql('SELECT DISTINCT ano FROM ? ORDER BY ano DESC',[disciplinas_grad]);
      let it = result[Symbol.iterator]();
      var anItem = it.next();

      while (!anItem.done) {
        
        retorno += '<option value="'+ anItem.value.ano +'">'+anItem.value.ano +'</option>';
        anItem = it.next();
      }

      return retorno;
  },

  getSelectList: function(){
    var retorno ='';
    retorno+='<div>';
    retorno+='<select name="ano" id="ano_filter">'+this.recDistinctAnos()+'</select>';

    retorno +='<button onclick="selectAnoDisciplina()"> Selecione</button>';
    retorno+='<script> function selectAnoDisciplina():{console.log(document.getElementById("ano_filter").value);}</script>'
    retorno+='</div>'

    return retorno;
  },

  recLinhas: function() {
      var retorno = '';

      var result = alasql('SELECT * FROM ? ORDER BY ano',[disciplinas_grad]);
      let it = result[Symbol.iterator]();
      var anItem = it.next();

      while (!anItem.done) {
        
        retorno += '<p><strong>' + anItem.value.nome[getLang()].toUpperCase() + '</strong><br />' + anItem.value.desc + '</p>';
        anItem = it.next();
      }

      return retorno;
  },

  conteudo: function() {
      // calculations...
      var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.recAreas() + '</p><p>';
      dContent+=this.getSelectList();
      // dContent += this.recLinhas();
      dContent += '</div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

      return dContent;
  }
};
