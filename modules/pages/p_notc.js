
//data file
useDataResource('tb-noticia.js');


//texts in page
var pnotc_txt_br = {
  'head': "Últimas Notícias",
  'label': "Notícias",
  'par-01': "Publicado em"
}

var pnotc_txt_en = {
  'head': "Latest News",
  'label': "News",
  'par-01': "Published in"
}


var PNOTC = function() {
    this.langTxt = ( getLang() == 0 ) ? pnotc_txt_br : pnotc_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PNOTC.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
    },

    recNoticias: function() {
        var retorno = '<div class="row"><div class="row-content"><div class="column col-md-12 " data-panel=""><div class="tile tile-default" id="b94"><div class="cover-collection-tile tile-content"><div class="outstanding-header tile-content" style="text-align: center;"></div>';


        var result = alasql("SELECT * FROM ? ORDER BY data DESC",[noticia]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          retorno += '<div class="collection-item"><ul class="noticias listagem-noticias-com-foto"><li><div class="conteudo">';
          retorno += '<span class="descricao"><strong>' + this.langTxt['par-01'].toUpperCase() + ' ' + this.montaData(anItem.value.data) + '</strong></span>';
          retorno += '<h2 class="titulo"><a>' + anItem.value.titulo + '</a></h2><span>' + anItem.value.corpo + '</span></div></li></ul></div>';
          anItem = it.next();
        }

        retorno += '<div class="visualClear"><!-- --></div></div></div></div></div></div>';
        return retorno;
    },

    sorryEn: function() {
        return "<p>Sorry, this content is only available in Brazilian Portuguese (pt-br) since it is intended only for the Program's current students.";
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        if (getLang() == 0) dContent += this.recNoticias(); else dContent += this.sorryEn();
        dContent += '<div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
     }
};
