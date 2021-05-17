
//data file
useDataResource('tb-dissertacao.js');


//texts in page
var prepd_txt_br = {
  'head': "Repositório de Dissertações do PGSC",
  'label': "Dissertações",
  'par-01': "O atual PGSC tem suas raízes no Programa de Pós-graduação em Pesquisa Operacional e Matemática Aplicada, que possuía uma Linha de Pesquisa em Informática. Depois, disto, o Programa sofreu diversas modificações até ter seu formato atual a partir de 1995.",
  'par-02': "Neste repositório, você pode encontrar informações sobre as dissertações desenvolvidas no PGSC ao longo dos anos. Até o momento, o PGSC já formou a seguinte quantidade de mestres:",
  'par-03': "Atualmente, o PGSC não possui a versão eletrônica de todas as dissertações apresentadas -- principalmente as dos primeiros anos de funcionamento do Programa. Assim, se a versão eletrônica de sua dissertação não se encontra listada aqui, por favor, entre em contato com a Coordenação do PGSC, que a disponibilizaremos neste espaço.",
  'par-04': "Ano de apresentação da Dissertação"
}

var prepd_txt_en = {
  'head': "PGSC Master Dissertation Repository",
  'label': "Dissertations",
  'par-01': "The Graduate Program in Computer Engineering at IME emerged in 1972, focusing in Operational Research and Applied Mathematics. An year later, it stated focusing in Informatics. Years of collaboration between these three options and the increasing importance of cross-discipline expertise naturally led to the idea of merging these entities into a single Systems and Computing Program, in 1995.",
  'par-02': "In this repository, you can find information about the dissertations developed in the Program throughout the years. So far, the Master's course in Systems and Computing has graduate the following number of students:",
  'par-03': "Currently, we do not have a digital file for all presented dissertations -- mainly from the first years of the Program. If your dissertation file is not listed here, please contact the Program Coordination.",
  'par-04': "Choose the dissertation presentation year"
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
        var result = alasql("SELECT MAX(numero) as qtd FROM ?",[dissertacao]);
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

        var result = alasql("SELECT DISTINCT ano FROM ? ORDER BY ano DESC",[dissertacao]);
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

        retorno += this.insere1994(tdCount);
        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p><p>' + this.langTxt['par-02'] + ' ' + this.recNumMsc() + '.</p><p>' + this.langTxt['par-03'] + '</p><p><strong>' + this.langTxt['par-04'].toUpperCase() + '</strong</p><div id="parent-fieldname-text" class="plain"><table class="plain"><tbody>';
        dContent += this.recListaAnos();
        dContent += '</tbody></table></div></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
