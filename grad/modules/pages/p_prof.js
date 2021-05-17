
//data file
useDataResource('tb-professor.js');
useDataResource('tb-interessepesquisa.js');
useDataResource('tb-interesse-professor.js');


//texts in page
var pprof_txt_br = {
  'head': "Corpo Docente do PGSC",
  'label': "Docentes",
  'par-01': "Docentes Permanentes",
  'par-02': "Docentes Colaboradores"
}

var pprof_txt_en = {
  'head': "PGSC Faculty",
  'label': "Faculty",
  'par-01': "Full Member",
  'par-02': "Collaborator/Term Member"
}


var PPROF = function() {
    this.langTxt = ( getLang() == 0 ) ? pprof_txt_br : pprof_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PPROF.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    linkLattes: function(key) {

      var retorno = '<a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=' + key + '" target="_blank">';
      retorno += '<img src="' + siteUrl + imgDir + 'icone-lattes.png" width="22" height="22" style="vertical-align:sub;"></a>';

      return retorno;
    },

    topicos: function(docente) {

        var retorno = '';

        var result = alasql("SELECT intrs FROM ? WHERE prof="+docente,[interesse_professor]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var lista = anItem.value.intrs;

        while (lista.length != 0) {
          result = alasql("SELECT nome FROM ? WHERE codigo="+lista.shift(),[interesse_pesquisa]);
          it = result[Symbol.iterator]();
          anItem = it.next();

          retorno += anItem.value.nome[getLang()] + ', ';
        }

        retorno = retorno.substring(0, retorno.length-2);
        return retorno;
    },

    contentTab: function(key) {

        var retorno = '';

        var result = alasql("SELECT * FROM ? WHERE tipo='"+key+"' ORDER BY nome",[professor]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          retorno += '<tr style="text-align: left;"><td class="c1">&nbsp;</td>';
          retorno += '<td style="text-align: left;">' + anItem.value.nome + '&nbsp;</td>';
          retorno += '<td style="text-align: left;">' + this.topicos(anItem.value.codigo) + '&nbsp;</td>';
          retorno += '<td style="text-align: left;">' + anItem.value.email + '&nbsp;</td>';
          retorno += '<td style="text-align: center;">' + this.linkLattes(anItem.value.lattes) + '&nbsp;</td></tr>';

          anItem = it.next();
        }

        return retorno;
    },

    headerTab: function(key) {
        var retorno = '<tr class="bg"><td style="text-align: left;"><strong>&nbsp;</strong></td><td style="text-align: left;" width="320"><strong>' + getLabel('nome').toUpperCase() + '</strong></td><td style="text-align: left;"><strong>' + getLabel('interesses').toUpperCase() + '</strong></td><td style="text-align: left;"><strong>' + getLabel('contato').toUpperCase() + '</strong></td><td style="text-align: bottom;"><strong>' + getLabel('lattes').toUpperCase() + '</strong></td></tr>';

        return retorno;
    },

    qtyDocentes: function(key) {

        var result = alasql("SELECT COUNT(codigo) as qty FROM ? WHERE tipo ='"+key+"'",[professor]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        return anItem.value.qty;
    },

    listaDocentes: function(key) {
        var retorno = '';
        var qty = this.qtyDocentes(key);

        var headerTxt = (key == "P" ? this.langTxt['par-01'] : this.langTxt['par-02']);

        if (qty > 0) {
          var retorno = '<h2>' + headerTxt + '</h2><table border="0" class="arquivos" summary=""><tbody>';
          retorno += this.headerTab(key);
          retorno += this.contentTab(key);
          retorno += '</tbody></table>';
        }

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>';

        dContent += this.listaDocentes("P");
        dContent += this.listaDocentes("C");

        dContent += '</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';
        return dContent;
     }
};
