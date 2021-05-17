
//data file
useDataResource('tb-dissertacao.js');
useDataResource('tb-linhapesquisa.js');
useDataResource('tb-professor.js');


//texts in page
var pdetd_txt_br = {
  'head': "Detalhes da Dissertação",
  'label': "Dissertações",
  'par-01': "Título",
  'par-02': "Autores",
  'par-03': "Data da Defesa",
  'par-04': "Linha de Pesquisa",
  'par-05': "Resumo",
  'par-06': "Arquivo",
  'par-07': "Ver arquivo"
}

var pdetd_txt_en = {
  'head': "Dissertation Details",
  'label': "Dissertations",
  'par-01': "Title",
  'par-02': "Authors",
  'par-03': "Presentation Date",
  'par-04': "Research Area",
  'par-05': "Abstract",
  'par-06': "File",
  'par-07': "Download file (text in pt-br only)"
}


var numero = getParameterByName('num');

var PDETD = function() {
    this.langTxt = ( getLang() == 0 ) ? pdetd_txt_br : pdetd_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PDETD.prototype = {
    label: function() {
        return this.langTxt['label'];


        var result = alasql("SELECT ano FROM ? WHERE numero="+numero,[dissertacao]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        return "Dissertações do PGSC no ano " + anItem.value.ano;
    },

    specialBreadcrumbs: function() {
        var result = alasql("SELECT ano FROM ? WHERE numero="+numero,[dissertacao]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var retorno = '';
        retorno += '<nav id="breadcrumbs" aria-label="Histórico de navegação (Breadcrumbs)"><div class="content"><span class="sr-only">Você está aqui:</span>';
        retorno += '<span class="home"><a href="' + siteUrl + '"><span class="fas fa-home" aria-hidden="true"></span><span class="sr-only">Página Inicial</span></a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-1"><a>' + getLabel("menu03") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-2"><a href="' + homeUrl + 'p_repd">' + getLabel("menu03-05") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-3"><a href="' + homeUrl + 'p_lstd&ano=' + anItem.value.ano + '">' + getLabel("menu03-05-a") + anItem.value.ano  + '</a></span></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-3"><span id="breadcrumbs-current">' + this.langTxt['head'] + '</span></span>';

        return retorno;
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
    },

    linkDownload: function(ano, arquivo) {
        if (arquivo === "") return '';
        else return '<p><strong>' + this.langTxt['par-06'].toUpperCase() + '</strong><br /><a href="' + siteUrl + 'modules/files/dissertacoes/' + ano + '/' + arquivo + '" target="_blank"><img src="./modules/images/icone-pdf.png" width="20" height="20"> ' + this.langTxt['par-07'] + '</a></p>';
    },

    recLinha: function(key) {
        var result = alasql("SELECT nome FROM ? WHERE codigo="+key,[linha_pesquisa]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        return anItem.value.nome[getLang()];
    },

    recOrientadores: function(lista) {
        var retorno = '';
        var qtdOrientadores = lista.length;

        while (lista.length != 0) {
          var result = alasql("SELECT nome FROM ? WHERE codigo="+lista.shift(),[professor]);
          let it = result[Symbol.iterator]();
          var anItem = it.next();

          retorno += anItem.value.nome + ', ';
        }

        retorno = retorno.substring(0, retorno.length-2);

        if (qtdOrientadores == 1) retorno += ' (' + getLabel("orient").toLowerCase() + ')';
        else retorno += ' (' + getLabel("orient").toLowerCase() + getLabel("pl-composto") + ')';

        return retorno;
    },

    recDetalhes: function() {
        var result = alasql("SELECT * FROM ? WHERE numero="+numero,[dissertacao]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var locale01, locale02, abs01, abs02;
        if (getLang() == 0) {
          locale01 = pdetd_txt_br; locale02 = pdetd_txt_en;
          abs01 = anItem.value.resumo_pt; abs02 = anItem.value.resumo_en;
        }
        else {
          locale01 = pdetd_txt_en; locale02 = pdetd_txt_br;
          abs01 = anItem.value.resumo_en; abs02 = anItem.value.resumo_pt;
        }

        var tempData = anItem.value.ano + "" + anItem.value.dia.substring(3) + anItem.value.dia.substring(0, 2);

        var retorno = '<p><strong>' + this.langTxt['par-01'].toUpperCase() + '</strong><br />' + anItem.value.titulo + '</p>';
        retorno += '<p><strong>' + this.langTxt['par-02'].toUpperCase() + '</strong><br />' + anItem.value.autor + '<br />' + this.recOrientadores(anItem.value.orientador) + '</p>';
        retorno += '<p><strong>' + this.langTxt['par-03'].toUpperCase() + '</strong><br />' + this.montaData(tempData) + '</p>';
        retorno += '<p><strong>' + this.langTxt['par-04'].toUpperCase() + '</strong><br />' + this.recLinha(anItem.value.linha) + '</p>';
        retorno += '<p><strong>' + locale01['par-05'].toUpperCase() + '</strong><br />' + abs01 + '</p>';
        retorno += '<p><strong>' + locale02['par-05'].toUpperCase() + '</strong><br />' + abs02 + '</p>';
        retorno += this.linkDownload(anItem.value.ano, anItem.value.arquivo);
        retorno += '<br />';

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        dContent += this.recDetalhes();

        return dContent;
    }
};
