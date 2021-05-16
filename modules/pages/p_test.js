
//data file
//useDataResource('tb-areaconcentracao.js');
//useDataResource('tb-linhapesquisa.js')


//texts in page
/*var plpes_txt_br = {
  'head': "Teste",
  'label': "Pesquisa",
  'par-01': "O Programa de Pós-graduação em Sistemas e Computação possui",
  'par-02': "a seguinte Área de Concentração:",
  'par-03': "as seguintes Áreas de Concentração:",
  'par-04': "Associada à Área de Concentração",
  'par-05': ", a pesquisa é dividida nas seguintes Linhas de Pesquisa"
}

var plpes_txt_en = {
  'head': "Test",
  'label': "Research",
  'par-01': "The Graduate Program in Systems and Computing has",
  'par-02': "the following Research Major:",
  'par-03': "the following Research Majors:",
  'par-04': "The",
  'par-05': " Research Major, is structured in the following Research Areas"
}
*/

var PTEST = function() {
//    this.langTxt = ( getLang() == 0 ) ? plpes_txt_br : plpes_txt_en;
//    this.contentTitle = this.langTxt['head'];
this.contentTitle = 'Teste';
};

PTEST.prototype = {
    label: function() {
//        return this.langTxt['label'];
        return 'Teste';
    },

    recAreas: function() {
        var retorno = '<div class="govbr-tabs"><div class="tabs"><div class="tab"><a href="" data-id="ENTRADA">ENTRADA</a></div><div class="tab"><a href="" data-id="Orientações Gerais e Critérios Específicos">Orientações Gerais e Critérios Específicos</a></div><div class="tab"><a href="" data-id="Resultados">Resultados</a></div></div><div class="button-prev"><span class="fas fa-angle-left"></span></div><div class="button-next"><span class="fas fa-angle-right"></span></div></div><div class="tabs-content"><div class="tab-content" data-id="ENTRADA" data-url="http://www.comp.ime.eb.br/pos/?pc=p_test"><!-- TODO: Traduzir -->AAAAA HHHHH<p class="tab-loading"><span class="fas fa-spinner"></span>Aguarde. Carregando conteúdo da aba...</p></div><div class="tab-content" data-id="Orientações Gerais e Critérios Específicos" data-url="http://www.comp.ime.eb.br/pos/?pc=p_test"><!-- TODO: Traduzir -->XXXXX JJJJJ<p class="tab-loading"><span class="fas fa-spinner"></span>Aguarde. Carregando conteúdo da aba...</p></div><div class="tab-content" data-id="Resultados" data-url="http://www.comp.ime.eb.br/pos/?pc=p_test"><!-- TODO: Traduzir --><p class="tab-loading"><span class="fas fa-spinner"></span>Aguarde. Carregando conteúdo da aba...</p></div></div>';
        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.recAreas() + '</p><p>';
//        dContent += this.recLinhas();
        dContent += '</div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
