
//data file
useDataResource('tb-procedimento.js');
useDataResource('tb-formulario.js');

var idP = getParameterByName('id_p');

var PPRCD = function() {
    this.contentTitle = getLabel("proc").charAt(0).toUpperCase() + getLabel("proc").slice(1) + ': ' + getLabel("menu04-"+idP);
}

PPRCD.prototype = {
    label: function() {
        return getLabel("proc").charAt(0).toUpperCase() + getLabel("proc").slice(1);
    },

    specialBreadcrumbs: function() {
        var retorno = '';
        retorno += '<nav id="breadcrumbs" aria-label="Histórico de navegação (Breadcrumbs)"><div class="content"><span class="sr-only">Você está aqui:</span>';
        retorno += '<span class="home"><a href="' + siteUrl + '"><span class="fas fa-home" aria-hidden="true"></span><span class="sr-only">Página Inicial</span></a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-1"><a>' + getLabel("menu04") + '</a></span>';
        retorno += '<span dir="ltr" id="breadcrumbs-2"><span id="breadcrumbs-current">' + getLabel("menu04-"+idP) + '</span></span>';

        return retorno;
    },

    linkDownload: function(nome, arquivo) {
        var partes = arquivo.split('.');
        if (partes[1].startsWith('ly/')) return '<a href="' + arquivo + '" target="_blank">' + nome + ' (' + getLabel("url") + ')</a>';
        else return '<a href="' + siteUrl + formDir + arquivo + '" target="_blank">' + nome + ' ('+ partes[1] + ')</a>';
    },

    recFormulario(numero) {
        var result = alasql('SELECT nome, arquivo FROM ? WHERE numero='+numero,[formulario]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        if (anItem != null) return this.linkDownload(anItem.value.nome[getLang()], anItem.value.arquivo);
        return null;
    },

    prepParagrafo: function(strToSplit) {
        var partList = strToSplit.split("$f");

        if (partList.length == 1) return partList;
        else {
          var retorno = '';

          for (count = 0; count < partList.length; count++) {

              if (partList[count].trim().startsWith("id=")) {
                var serchList = partList[count].split("=");

                var formStr = this.recFormulario(serchList[1]);
                if (formStr != null) retorno += ' ' + formStr;
              }
              else retorno += ' ' + partList[count];
          }

          return retorno;
        }
    },

    recDescricao: function(id) {
        var result = alasql("SELECT * FROM ? WHERE num_proc="+id,[procedimento]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        return this.prepParagrafo(anItem.value.descricao[getLang()]);
    },

    sorryEn: function() {
        return "<p>Sorry, this content is only available in Brazilian Portuguese (pt-br) since it is intended only for the Program's current students.";
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text">';
        if (getLang() == 0) dContent += this.recDescricao(idP); else dContent += this.sorryEn();
        dContent += '<div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};

