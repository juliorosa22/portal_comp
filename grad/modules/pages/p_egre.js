
//data file

useDataResource('tb-egressos-grad.js');


//texts in page
var pegre_txt_br = {
  'head': "Turma de Egressos da Graduação",
  'label': "Egressos",
  'par-01': "defesa em",
  'par-02': "Abaixo, encontra-se a lista de Egressos agrupados por turma.",
  'par-03': ""
}

var pegre_txt_en = {
  'head': "Faculty Students",
  'label': "Students",
  'par-01': "presents in",
  'par-02': "Below is the list of Egresses grouped by class.",
  'par-03': ""
}


var PEGRE = function() {
    this.langTxt = ( getLang() == 0 ) ? pegre_txt_br : pegre_txt_en;
    this.contentTitle = this.langTxt['head'];
};

PEGRE.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
    },


    getDistinctTurmaAno: function(){
        var retorno = '';

        var result = alasql('SELECT DISTINCT ano FROM ? ORDER BY ano DESC ',[egressos_grad]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        retorno += '<option value="all">'+'Listar Todos'+'</option>';
        while (!anItem.done) {
            retorno += '<option value="'+ anItem.value.ano +'">'+anItem.value.ano +'</option>';
            anItem = it.next();
      }

      return retorno;
    },

    buildSelectList: function(){
        var retorno ='';
        retorno+='<div><p>Turma Ano:  <select name="ano" id="turma_ano_filter" onchange="buildTurmaAnoGrid()">'+this.getDistinctTurmaAno()+'</select></p>';
        return retorno;
    },


    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-02'] + '</p><h2>' + this.langTxt['par-03'] + '</h2>';
        dContent+=this.buildSelectList();
        dContent+='<div id="grid_alunos_grad">';
        dContent += '<table border="0" class="arquivos" summary="">'; 
        dContent += '<thead><tr class="bg"><strong>&nbsp;</strong></td><th style="text-align: left;" width="320"><strong>' + getLabel('nome').toUpperCase() + '</strong></th><th style="text-align: left;" width="90"><strong>' + 'ANO' + '</strong></th></tr></thead>';
        dContent+='<tbody></tbody></table></div>';
        dContent += '</div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />'
        return dContent;
    }
};


function getEgressosByTurma(turma_ano){
  var retorno = '';
  let subSql='';
  (turma_ano === "all")?subSql="ORDER BY ano DESC,nome ASC":subSql="WHERE ano LIKE\""+turma_ano+"\" ORDER BY nome ASC"; 
  var result = alasql("SELECT * FROM ? "+subSql,[egressos_grad]);
  let it = result[Symbol.iterator]();
  var anItem = it.next();
  
  
  while (!anItem.done) {
      retorno += '<tr style="text-align: left;">';
      retorno += '<td style="text-align: left;">' + anItem.value.nome + '&nbsp;</td>';
      retorno += '<td style="text-align: left;">' + anItem.value.ano + '&nbsp;</td></tr>';
      anItem = it.next();
  }
  
  return retorno;
}


function buildTurmaAnoGrid(){
  let turma_ano = document.getElementById("turma_ano_filter").value;
  let newBody= '<table border="0" class="arquivos" summary="">'; 
  newBody += '<thead><tr class="bg"><strong>&nbsp;</strong></td><th style="text-align: left;" width="320"><strong>' + getLabel('nome').toUpperCase() + '</strong></th><th style="text-align: left;" width="90"><strong>' + 'ANO' + '</strong></th></tr></thead>';
  newBody+='<tbody>'+this.getEgressosByTurma(turma_ano)+'</tbody></table>';
  document.getElementById("grid_alunos_grad").innerHTML=newBody;
}


  
  
  