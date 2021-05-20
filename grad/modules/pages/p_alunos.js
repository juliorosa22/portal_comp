
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

    listaAlunos: function(rotulo, identificador) {

        var retorno = '';

        var result = alasql("SELECT nome FROM ? ORDER BY ano DESC",[aluno_grad]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        
        var result_year = alasql("SELECT DISTINCT ano FROM ? ORDER BY ano DESC",[aluno_grad]);
        let it_year = result_year[Symbol.iterator]();
        var itemYear = it_year.next();
        while(!itemYear.done){
            while (!anItem.done) {
                retorno += '<td style="text-align: left;">' + anItem.value.nome + '&nbsp;</td>';
                retorno += '<td style="text-align: left;">' + itemYear.value.ano + '&nbsp;</td>';
                anItem = it.next();
              }
              itemYear=it_year.next();
        }
        

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-02'] + '</p><h2>' + this.langTxt['par-03'] + '</h2>';

        dContent += '<table border="0" class="arquivos" summary=""><tbody>';
        //dContent += '<tr class="bg"><strong>&nbsp;</strong></td><td style="text-align: left;" width="90"><strong>' + getLabel('codigo').toUpperCase() + '</strong></td><td style="text-align: left;" width="320"><strong>' + getLabel('nome').toUpperCase() + '</strong></td><td style="text-align: left;" width="350"><strong>' + getLabel('or-princ').toUpperCase() + '</strong></td><td style="text-align: left;" width="200"><strong>' + getLabel('prazo').toUpperCase() + '</strong></td></tr>';
        dContent += '<tr class="bg"><strong>&nbsp;</strong></td><td style="text-align: left;" width="90"><strong>' + getLabel('Nome').toUpperCase() + '</strong></td><td style="text-align: left;" width="320"><strong>' + 'ANO' + '</strong></td></tr>';
        dContent += this.listaAlunos();
        dContent += '</tbody></table></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />'

        return dContent;
    }
};
