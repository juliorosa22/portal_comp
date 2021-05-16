
//texts in page
var pegre_txt_br = {
  'head': "Egressos do PGSC",
  'label': "Egressos",
  'par-01': 'De acordo com o Documento de Área de Ciência da Computação, na avaliação quadrienal será considerado como os programas acompanham os egressos. Desta forma, é importante que os programas relatem a atuação atual dos egressos. Nesse sentido, contamos com a sua ajuda - se você é egresso do curso de Mestrado em Sistemas e Computação do PGSC, por favor, preencha seus dados <a href="https://bit.ly/2zW8pQI" target="_blank">aqui</a> (nós só os usamos para gerar estatísticas sobre a ocupação dos egressos).'
}

var pegre_txt_en = {
  'head': "PGSC Alumni",
  'label': "Alumni",
  'par-01': 'You matter, and your connection to our Graduate Program, and the Military Institute of Engineering, is important to us. We want to hear from you and learn more about your research or professional endeavors, whether in the academy, corporate industry, government, or non-profit sector. If you would like to participate in the PGSC Alumni Community, please fill in the form <a href="https://bit.ly/2zW8pQI" target="_blank">here</a> (we only collect data regarding your career aspirations and experiences that will be used to improve our graduate programs).'
}


var PEGRE = function() {
    this.langTxt = ( getLang() == 0 ) ? pegre_txt_br : pegre_txt_en;
    this.contentTitle = this.langTxt['head'];
};

PEGRE.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
