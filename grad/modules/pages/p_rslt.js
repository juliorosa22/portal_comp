

//data file
useDataResource('tb-aauxgeral.js');

//texts in page
var prslt_txt_br = {
  'head': "Resultado da Seleção",
  'label': "Resultados",
  'par-01': "O processo de seleção de candidatos ao curso de Mestrado do PGSC é realizado pelo CPPG do PGSC. No entanto, como todo o processo de seleção aos cursos de pós-graduação do IME são centralizados na Subdivisão de Cursos de Pós-graduação (SD/1), a divulgação dos resultados da seleção é disponibilizada diretamente no site da SD/1.",
  'par-02': "O resultado da última seleção pode ser vista"
}

var prslt_txt_en = {
  'head': "Admission Process Results",
  'label': "Results",
  'par-01': "Applications for the Master's course of the Systems and Computing Engineering Program are assessed by a Recruitment Comission. However, the admission process is centralized and the admission process results are reported by the Pro-Rectory of Graduate Studies",
  'par-02': "The results of the last admission process can be seen"
}


var PRSLT = function() {
    this.langTxt = ( getLang() == 0 ) ? prslt_txt_br : prslt_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PRSLT.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    montaUrlAqui: function() {
        return '<a href="' + resultado_selecao + '" target="_blank">' + getLabel('aqui') + '</a>';
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '.</p><p>' + this.langTxt['par-02'] + ' ' + this.montaUrlAqui() + '</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};

