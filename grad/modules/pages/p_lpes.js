
//data file
useDataResource('tb-areaconcentracao.js');
useDataResource('tb-linhapesquisa.js')


//texts in page
var plpes_txt_br = {
  'head': "Linhas de Pesquisa do PGSC",
  'label': "Pesquisa",
  'par-01': "O Programa de Pós-graduação em Sistemas e Computação possui",
  'par-02': "a seguinte Área de Concentração:",
  'par-03': "as seguintes Áreas de Concentração:",
  'par-04': "Associada à Área de Concentração",
  'par-05': ", a pesquisa é dividida nas seguintes Linhas de Pesquisa"
}

var plpes_txt_en = {
  'head': "Rearch and Structure",
  'label': "Research",
  'par-01': "The Graduate Program in Systems and Computing has",
  'par-02': "the following Research Major:",
  'par-03': "the following Research Majors:",
  'par-04': "The",
  'par-05': " Research Major, is structured in the following Research Areas"
}


var PLPES = function() {
    this.langTxt = ( getLang() == 0 ) ? plpes_txt_br : plpes_txt_en;
    this.contentTitle = this.langTxt['head'];
};

PLPES.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    recAreas: function() {
        var retorno = this.langTxt['par-01'] + ' ';

        var result = alasql('SELECT COUNT(codigo) as num FROM ? WHERE ativa=1',[area_concentracao]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var qtdAreas = anItem.value.num;
        if (qtdAreas == 1) retorno += this.langTxt['par-02'] + ' ';
        else retorno += this.langTxt['par-03'] + ' ';

        result = alasql('SELECT nome FROM ? WHERE ativa=1 ORDER BY nome',[area_concentracao]);
        it = result[Symbol.iterator]();
        anItem = it.next();

        while (!anItem.done) {
          retorno += '<span style="font-weight:bold;">' + anItem.value.nome[getLang()] + '</span>, ';
          anItem = it.next();
        }

        retorno = retorno.substring(0, retorno.length-2) + '.';
        return retorno;
    },

    recLinhas: function() {
        var retorno = '';

        var result = alasql('SELECT codigo, nome FROM ? WHERE ativa=1',[area_concentracao]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          retorno += '<p>' + this.langTxt['par-04'] + ' <strong>' + anItem.value.nome[getLang()] + '</strong>' + this.langTxt['par-05'] + ':</p>';

          var acId = anItem.value.codigo;

          var outroResult = alasql('SELECT nome, descricao FROM ? WHERE idarea=' + acId + ' ORDER BY nome',[linha_pesquisa]);
          let outroIt = outroResult[Symbol.iterator]();
          var outroAnItem = outroIt.next();

          while (!outroAnItem.done) {
            retorno += '<p><strong>' + outroAnItem.value.nome[getLang()].toUpperCase() + '</strong><br />' + outroAnItem.value.descricao[getLang()] + '</p>';
            outroAnItem = outroIt.next();
          }

          anItem = it.next();
        }

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.recAreas() + '</p><p>';
        dContent += this.recLinhas();
        dContent += '</div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
