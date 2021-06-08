
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

        var result = alasql("SELECT * FROM ? ORDER BY ano DESC",[aluno_grad]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        
        
        while (!anItem.done) {
            retorno += '<tr style="text-align: left;"><td class="c1">&nbsp;</td>';
            retorno += '<td style="text-align: left;">' + anItem.value.nome + '&nbsp;</td>';
            retorno += '<td style="text-align: left;">' + anItem.value.ano + '&nbsp;</td></tr>';
            anItem = it.next();
        }
        
        

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-02'] + '</p><h2>' + this.langTxt['par-03'] + '</h2>';

        dContent += '<table border="0" class="arquivos" summary="">';
        //dContent += '<tr class="bg"><strong>&nbsp;</strong></td><td style="text-align: left;" width="90"><strong>' + getLabel('codigo').toUpperCase() + '</strong></td><td style="text-align: left;" width="320"><strong>' + getLabel('nome').toUpperCase() + '</strong></td><td style="text-align: left;" width="350"><strong>' + getLabel('or-princ').toUpperCase() + '</strong></td><td style="text-align: left;" width="200"><strong>' + getLabel('prazo').toUpperCase() + '</strong></td></tr>';
        dContent += '<thead><tr class="bg"><strong>&nbsp;</strong></td><th style="text-align: left;" width="320"><strong>' + getLabel('nome').toUpperCase() + '</strong></th><th style="text-align: left;" width="90"><strong>' + 'ANO' + '</strong></th></tr></thead>';
        dContent += '<tbody>'+this.listaAlunos();
        dContent += '</tbody></table></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />'

        return dContent;
    }
};
