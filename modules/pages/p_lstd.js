
//data file
useDataResource('tb-dissertacao.js');


//texts in page
var plstd_txt_br = {
  'head': "Dissertações do PGSC no ano de",
  'label': "Dissertações",
  'par-01': "Dissertação de Mestrado",
  'par-02': "Autor",
  'par-03': "Apresentada em"
}

var plstd_txt_en = {
  'head': "Dissertations Presented in",
  'label': "Dissertations",
  'par-01': "Master Dissertation",
  'par-02': "Author",
  'par-03': "Presented in"
}


var ano = getParameterByName('ano');

var PLSTD = function() {
    this.langTxt = ( getLang() == 0 ) ? plstd_txt_br : plstd_txt_en;
    this.contentTitle = this.langTxt['head'] + ' ' + ano;
}

PLSTD.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    specialBreadcrumbs: function() {
        var retorno = '';
        retorno += '<nav id="breadcrumbs" aria-label="Histórico de navegação (Breadcrumbs)"><div class="content"><span class="sr-only">Você está aqui:</span>';
        retorno += '<span class="home"><a href="' + siteUrl + '"><span class="fas fa-home" aria-hidden="true"></span><span class="sr-only">Página Inicial</span></a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-1"><a>' + getLabel("menu03") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-2"><a href="' + homeUrl + 'p_repd">' + getLabel("menu03-05") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-3"><span id="breadcrumbs-current">' + getLabel("menu03-05-a") + ano + '</span></span>';

        return retorno;
    },

    montaData: function(str) {
        if (getLang() == 0) return str + '/' + ano;
        else return str.substring(3) + '/' + str.substring(0, 2) + '/' + ano;
    },

    recListaDissertacoes: function() {
        var retorno = '<div class="row"><div class="row-content"><div class="column col-md-12 " data-panel=""><div class="tile tile-default" id="b94"><div class="cover-collection-tile tile-content"><div class="outstanding-header tile-content" style="text-align: center;"></div>';

        var result = alasql("SELECT * FROM ? WHERE ano="+ano+" ORDER BY numero DESC",[dissertacao]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          retorno += '<div class="collection-item"><ul class="noticias listagem-noticias-com-foto"><li><div class="conteudo">';
          retorno += '<span class="descricao"><strong>' + this.langTxt['par-01'].toUpperCase() + '</strong></span>';
          retorno += '<h2 class="titulo"><a href="' + homeUrl + 'p_detd&num=' + anItem.value.numero + '">' + anItem.value.titulo + '</a></h2>';
          retorno += '<span class="descricao">' + this.langTxt['par-02'] + ': ' + anItem.value.autor + '</span>';
          retorno += '<span class="descricao">' + this.langTxt['par-03']  + ' ' + this.montaData(anItem.value.dia) + '</span></div></li></ul></div>';

          anItem = it.next();
        }

        retorno += '<div class="visualClear"><!-- --></div></div></div></div></div></div>';
        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        dContent += this.recListaDissertacoes();
        dContent += '<div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
