
//data file

useDataResource('tb-aluno-grad.js');


//texts in page
var palunos_txt_br = {
  'head': "Corpo Discente da Graduação",
  'label': "Alunos",
  'par-01': "defesa em",
  'par-02': "Abaixo, encontra-se a lista de alunos regularmente matriculados no Curso.",
  'par-03': "Discentes regularmente matriculados"
}

var palunos_txt_en = {
  'head': "Faculty Students",
  'label': "Students",
  'par-01': "presents in",
  'par-02': "Below, you can find the list of the Master's course current students.",
  'par-03': "Current Students"
}


var PALUNOS = function() {
    this.langTxt = ( getLang() == 0 ) ? palunos_txt_br : palunos_txt_en;
    this.contentTitle = this.langTxt['head'];
};

PALUNOS.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
    },


    getDistinctTurmaAno: function(){
        var retorno = '';

        var result = alasql('SELECT DISTINCT ano FROM ? ORDER BY ano DESC ',[aluno_grad]);
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
    
        retorno+='<div><p>Ano Turma:  <select name="ano" id="turma_ano_filter" onchange="buildTurmaAnoGrid()">'+this.getDistinctTurmaAno()+'</select></p><br>';
        
        return retorno;
    },


    listaAlunos: function(rotulo, identificador) {

        var retorno = '';

        var result = alasql("SELECT * FROM ? ORDER BY ano DESC",[aluno_grad]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        
        
        while (!anItem.done) {
            retorno += '<tr style="text-align: left;">';
            retorno += '<td style="text-align: left;">' + anItem.value.nome + '&nbsp;</td>';
            retorno += '<td style="text-align: left;">' + anItem.value.ano + '&nbsp;</td></tr>';
            anItem = it.next();
        }
        
        

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



function getAlunosByTurma(turma_ano){
  var retorno = '';
  let subSql='';
  (turma_ano === "all")?subSql="ORDER BY ano DESC,nome DESC":subSql="WHERE ano LIKE\""+turma_ano+"\" ORDER BY nome DESC"; 
  var result = alasql("SELECT * FROM ? "+subSql,[aluno_grad]);
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
    newBody+='<tbody>'+getAlunosByTurma(turma_ano)+'</tbody></table>';
    document.getElementById("grid_alunos_grad").innerHTML=newBody;
  }