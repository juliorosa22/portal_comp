
//data file
useDataResource('tb-pfc.js');


//texts in page
var prepd_txt_br = {
  'head': "Repositório de Projetos de Fim de Curso da Graduação",
  'label': "PFCs",
  'par-01': "O template (formato LaTeX) para a redação do relatório de PFC (usado nas apresentações de VE, VC e VF) pode ser encontrado",
  'par-02': "aqui",
  'par-03': "Atualmente, o PGSC não possui a versão eletrônica de todas as dissertações apresentadas -- principalmente as dos primeiros anos de funcionamento do Programa. Assim, se a versão eletrônica de sua dissertação não se encontra listada aqui, por favor, entre em contato com a Coordenação do PGSC, que a disponibilizaremos neste espaço.",
  'par-04': "Ano de apresentação do PFC"
}

var prepd_txt_en = {
  'head': "Repository of Graduation Final Project ",
  'label': "Final Projects",
  'par-01': "The template (LaTeX format) for writing the PFC report (used in VE, VC and VF presentations) can be found",
  'par-02': "here",
  'par-03': "Currently, we do not have a digital file for all presented dissertations -- mainly from the first years of the Program. If your dissertation file is not listed here, please contact the Program Coordination.",
  'par-04': "Choose the PFC presentation year"
}


var PREPD = function() {
    this.langTxt = ( getLang() == 0 ) ? prepd_txt_br : prepd_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PREPD.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    recNumMsc: function() {
        var result = alasql("SELECT MAX(numero) as qtd FROM ?",[tb_pfc]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        return anItem.value.qtd;
    },

    insere1994: function(tdCount) {
        var retorno = '';

        if (tdCount == 14) {
          retorno += '<td><span>&nbsp;</span></a></span></td></tr>';
          tdCount = 0;
        }

        if (tdCount == 0) retorno += '<tr>';

        retorno += '<td colspan="2"><span><a target="_self" title="" data-tippreview-image="" href="' + homeUrl + 'p_antd" data-tippreview-title="" class="internal-link" data-tippreview-enabled="false"><span>1994 a 1974</span></a></span></td>';
        tdCount = tdCount + 2;

        if (tdCount == 15) retorno += '</tr>';
        else retorno += '<td colspan="' + (15-tdCount) + '"><span>&nbsp;</span></td></tr>';

        return retorno;
    },

    recListaAnos: function() {
        var retorno = '';

        var result = alasql("SELECT DISTINCT ano FROM ? ORDER BY ano DESC",[tb_pfc]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var tdCount = 0;
        while (!anItem.done) {
          if (tdCount == 0) retorno += '<tr>';

          retorno += '<td><span><a target="_self" title="" data-tippreview-image="" href="' + homeUrl + 'p_lstd&ano=' + anItem.value.ano + '" data-tippreview-title="" class="internal-link" data-tippreview-enabled="false"><span>' + anItem.value.ano + '</span></a></span></td>';

          if (++tdCount == 15) {
            retorno += '</tr>';
            tdCount = 0;
          }
          anItem = it.next();
        }

        
        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '<a href="https://github.com/imebibli/abntex2ime/releases">'+ this.langTxt['par-02']+'<a></p>'+ '<p><strong>' + this.langTxt['par-04'].toUpperCase() + '</strong</p><div id="parent-fieldname-text" class="plain"><table class="plain"><tbody>';
        dContent += this.recListaAnos();
        dContent += '</tbody></table></div></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
