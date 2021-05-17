
//data file
useDataResource('tb-professor.js');
useDataResource('tb-graduacao.js');
useDataResource('tb-equipe.js');

//texts in page
var pcord_txt_br = {
  'head': "Coordenação e Equipe do PGSC",
  'label': "Equipe",
  'par-01': "PROGRAMA (MESTRADO) avaliado pela CAPES, Conceito 3, em 2013-2016.<br />Curso reconhecido pela Portaria n 656, do Ministério da Educação, de 22 de maio de 2017, publicada no D.O.U, de 23 de maio de 2017, Seção 1, p. 15."
}

var pcord_txt_en = {
  'head': "PGSC Administration and Staff",
  'label': "Team",
  'par-01': "GRADUATE PROGRAM (Master's Course) accredited by CAPES, Level 3, 2017-2020."
}


var PCORD = function() {
    this.langTxt = ( getLang() == 0 ) ? pcord_txt_br : pcord_txt_en;
    this.contentTitle = this.langTxt['head'];
};

PCORD.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    recData: function(rotulo, identificador) {
        var retorno = '<p><strong>' + getLabel(rotulo).toUpperCase() + '</strong><br />';

        var result = alasql('SELECT * FROM ? WHERE codigo="' + identificador + '"',[equipe]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var nome, grad;

        var ref = anItem.value.prof;

        if (ref == 0) {
          nome = anItem.value.nome;
          grad = anItem.value.graduacao;
        }
        else {
          result = alasql("SELECT * FROM ? WHERE codigo=" + ref,[professor]);

          it = result[Symbol.iterator]();
          anItem = it.next();

          nome = anItem.value.nome;
          grad = anItem.value.graduacao;
        }

        result = alasql("SELECT * FROM ? WHERE codigo=" + grad,[graduacao]);
        it = result[Symbol.iterator]();
        anItem = it.next();

        var descGrad = anItem.value.descricao[getLang()];
        if (grad < 4) {
          retorno += descGrad + ' ' + nome;
        }
        else {
          retorno += nome + ' - ' + descGrad;
        }

        retorno += '</p>';

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        dContent += '<p><strong>' + getLabel('ime').toUpperCase() + '</strong><br /><strong>' + getLabel('pgsc').toUpperCase() + '</strong></p>';

        dContent += this.recData('cmdt-dir', 'cmdt');
        dContent += this.recData('ch-depq', 'depq');
        dContent += this.recData('ch-sd1', 'sd_1');
        dContent += this.recData('ch-se9', 'se_9');
        dContent += this.recData('coord', 'crd1');
        dContent += this.recData('coord-adj', 'crd2');

        dContent += '<p>' + this.langTxt['par-01'] + '</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
