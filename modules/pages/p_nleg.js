
//data file
useDataResource('tb-norma.js');


//texts in page
var pnleg_txt_br = {
  'head': "Normas e Legislações",
  'label': "Normas",
  'par-01': "Publicado em",
  'par-02': "Ver arquivo"
}

var pnleg_txt_en = {
  'head': "Norms e Regulations",
  'label': "Norms",
  'par-01': "Published in",
  'par-02': "Norm file (pt-br only)"
}


var PNLEG = function() {
    this.langTxt = ( getLang() == 0 ) ? pnleg_txt_br : pnleg_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PNLEG.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    linkDownload: function(arquivo) {
        return '<a href="' + siteUrl + 'modules/files/norma/' + arquivo + '" target="_blank"><img src="./modules/images/icone-pdf.png" width="20" height="20"> ' + this.langTxt['par-02'] + '</a>';
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
    },

    recNormas: function() {
        var retorno = '<div class="row"><div class="row-content"><div class="column col-md-12 " data-panel=""><div class="tile tile-default" id="b94"><div class="cover-collection-tile tile-content"><div class="outstanding-header tile-content" style="text-align: center;"></div>';


        var result = alasql("SELECT * FROM ? ORDER BY data DESC",[norma]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          retorno += '<div class="collection-item"><ul class="noticias listagem-noticias-com-foto"><li><div class="conteudo">';
          retorno += '<span class="descricao"><strong>' + this.langTxt['par-01'].toUpperCase() + ' ' + this.montaData(anItem.value.data) + '</strong></span>';
          retorno += '<h2 class="titulo"><a>' + anItem.value.titulo[getLang()] + '</a></h2><span class="descricao">' + anItem.value.descricao[getLang()] + '</span>';
          retorno += '<span class="descricao">' + this.linkDownload(anItem.value.arquivo) + '</span></div></li></ul></div>';
          anItem = it.next();
        }

        retorno += '<div class="visualClear"><!-- --></div></div></div></div></div></div>';
        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        dContent += this.recNormas();
        dContent += '<div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
     }
};
