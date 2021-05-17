
//data file
useDataResource('tb-aauxfaq.js');


//texts in page
var pfaqs_txt_br = {
  'head': "Perguntas Frequentes",
  'label': "FAQ"
}

var pfaqs_txt_en = {
  'head': "Frequently Asked Questions",
  'label': "FAQ"
}


var PFAQS = function() {
    this.langTxt = ( getLang() == 0 ) ? pfaqs_txt_br : pfaqs_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PFAQS.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    recFaq: function() {
        var retorno = "";

        var result = alasql("SELECT * FROM ? ORDER BY numero",[lista_faq]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          retorno += '<p><span style="font-weight: bold;">' + anItem.value.numero + '. ' + anItem.value.enunciado[getLang()] + '</span><br />' + anItem.value.resposta[getLang()] + '</p>';

          anItem = it.next();
        }

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        dContent += this.recFaq();
        dContent += '<div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};

