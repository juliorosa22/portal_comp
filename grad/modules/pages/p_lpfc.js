
//data file
useDataResource('tb-pfc.js');


//texts in page
var plpfc_txt_br = {
  'head': "Projetos de Fim de Curso da Graduação do ano",
  'label': "PFCs",
  'par-01': "PFC",
  'par-02': "Autor(es)",
  'par-03': "Apresentada em"
}

var plpfc_txt_en = {
  'head': "Graduation Final Project  Presented in",
  'label': "Final Projects",
  'par-01': "Project",
  'par-02': "Author",
  'par-03': "Presented in"
}


var ano = getParameterByName('ano');

var PLPFC = function() {
    this.langTxt = ( getLang() == 0 ) ? plpfc_txt_br : plpfc_txt_en;
    this.contentTitle = this.langTxt['head'] + ' ' + ano;
}

PLPFC.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    specialBreadcrumbs: function() {
        var retorno = '';
        retorno += '<nav id="breadcrumbs" aria-label="Histórico de navegação (Breadcrumbs)"><div class="content"><span class="sr-only">Você está aqui:</span>';
        retorno += '<span class="home"><a href="' + siteUrl + '"><span class="fas fa-home" aria-hidden="true"></span><span class="sr-only">Página Inicial</span></a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-1"><a>' + getLabel("menu02") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-2"><a href="' + homeUrl + 'p_repd">' + getLabel("menu02-01") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-3"><span id="breadcrumbs-current">' + this.label()+" " + ano + '</span></span>';

        return retorno;
    },

    montaData: function(str) {
        if (getLang() == 0) return str + '/' + ano;
        else return str.substring(3) + '/' + str.substring(0, 2) + '/' + ano;
    },

    recListaPfcs: function() {
        var retorno = '<div class="row"><div class="row-content"><div class="column col-md-12 " data-panel=""><div class="tile tile-default" id="b94"><div class="cover-collection-tile tile-content"><div class="outstanding-header tile-content" style="text-align: center;"></div>';

        var result = alasql("SELECT * FROM ? WHERE ano="+ano+" ORDER BY numero DESC",[tb_pfc]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        
        while (!anItem.done) {
          retorno += '<div class="collection-item"><ul class="noticias listagem-noticias-com-foto"><li><div class="conteudo">';
          retorno += '<span class="descricao"><strong>' + this.langTxt['par-01'].toUpperCase() + '</strong></span>';
          retorno += '<h2 class="titulo"><a href="' + homeUrl + 'p_detpfc&num=' + anItem.value.numero + '">' + anItem.value.titulo + '</a></h2>';
          
          let aux_autor='';
          for(var i=0;i<anItem.value.autor.length;i++){
            if(i>0)aux_autor+=', '  
            aux_autor+=anItem.value.autor[i]
          }
          retorno += '<span class="descricao">' + this.langTxt['par-02'] + ': ' + aux_autor + '</span>';
          retorno += '</div></li></ul></div>';

          anItem = it.next();
        }

        retorno += '<div class="visualClear"><!-- --></div></div></div></div></div></div>';
        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        dContent += this.recListaPfcs();
        dContent += '<div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
