
//data file
useDataResource('tb-pfc.js');


//texts in page
var pdetpfc_txt_br = {
  'head': "Detalhes do PFC",
  'label': "PFCs",
  'par-01': "Título",
  'par-02': "Autores",
  'par-03': "Resumo",
  'par-04': "Arquivo",
  'par-05': "Ver arquivo"
}

var pdetpfc_txt_en = {
  'head': "Project Details",
  'label': "PFCs",
  'par-01': "Title",
  'par-02': "Authors",
  'par-03': "Abstract",
  'par-04': "File",
  'par-05': "Download file (text in pt-br only)"
}


var numero = getParameterByName('num');

var PDETPFC = function() {
    this.langTxt = ( getLang() == 0 ) ? pdetpfc_txt_br : pdetpfc_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PDETPFC.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    specialBreadcrumbs: function() {
        var result = alasql("SELECT ano FROM ? WHERE numero="+numero,[tb_pfc]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var retorno = '';
        retorno += '<nav id="breadcrumbs" aria-label="Histórico de navegação (Breadcrumbs)"><div class="content"><span class="sr-only">Você está aqui:</span>';
        retorno += '<span class="home"><a href="' + siteUrl + '"><span class="fas fa-home" aria-hidden="true"></span><span class="sr-only">Página Inicial</span></a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-1"><a>' + getLabel("menu02") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-2"><a href="' + homeUrl + 'p_repd">' + getLabel("menu02-01") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-3"><a href="' + homeUrl + 'p_lpfc&ano=' + anItem.value.ano + '">' + this.label()+' ' + anItem.value.ano  + '</a></span></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-3"><span id="breadcrumbs-current">' + this.langTxt['head'] + '</span></span>';

        return retorno;
    },

    
    linkDownload: function(ano, arquivo) {
        if (arquivo === "") return '';
        else return '<p><strong>' + this.langTxt['par-04'].toUpperCase() + '</strong><br /><a href="' + siteUrl + 'modules/files/pfc/' + ano + '/' + arquivo + '" target="_blank"><img src="./modules/images/icone-pdf.png" width="20" height="20"> ' + this.langTxt['par-05'] + '</a></p>';
    },



    recDetalhes: function() {
        var result = alasql("SELECT * FROM ? WHERE numero="+numero,[tb_pfc]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var locale01, locale02, abs01, abs02;
        if (getLang() == 0) {
          locale01 = pdetpfc_txt_br; locale02 = pdetpfc_txt_en;
          abs01 = anItem.value.resumo_pt; abs02 = anItem.value.resumo_en;
        }
        else {
          locale01 = pdetpfc_txt_en; locale02 = pdetpfc_txt_br;
          abs01 = anItem.value.resumo_en; abs02 = anItem.value.resumo_pt;
        }

        var tempData = anItem.value.ano + "" + anItem.value.dia.substring(3) + anItem.value.dia.substring(0, 2);

        var retorno = '<p><strong>' + this.langTxt['par-01'].toUpperCase() + '</strong><br />' + anItem.value.titulo + '</p>';
        retorno += '<p><strong>' + this.langTxt['par-02'].toUpperCase() + '</strong><br />' + anItem.value.autor + '<br />' + anItem.value.orientador + '</p>';
        retorno += '<p><strong>' + locale01['par-03'].toUpperCase() + '</strong><br />' + abs01 + '</p>';
        retorno += '<p><strong>' + locale02['par-03'].toUpperCase() + '</strong><br />' + abs02 + '</p>';
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
