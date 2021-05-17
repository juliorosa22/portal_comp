
//data file
useDataResource('tb-aauxqts.js');


//texts in page
var pcldr_txt_br = {
  'head': "PGEPesq IME - Calendário Escolar PG",
  'label': "Calendário"
}

var pcldr_txt_en = {
  'head': "PGEPesq IME - Graduate Calendar",
  'label': "Calendar"
}


var PCLDR = function() {
    this.langTxt = ( getLang() == 0 ) ? pcldr_txt_br : pcldr_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PCLDR.prototype = {
    label: function() {
        return this.langTxt['label'];
    },


    mostraPdf: function() {
      var retorno = '<object data="' + siteUrl + 'modules/files/calendario/' + infoQts.ano + '-CPG.pdf" type="application/pdf" width="850" height="1000">';
      retorno += '<embed src="' + siteUrl + 'modules/files/calendario/' + infoQts.ano + '-PGEP.pdf" width="900px" height="700px" />';

      return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + ' (' + infoQts.ano + ')</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        dContent += this.mostraPdf();
        dContent += '</div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
     }
};
