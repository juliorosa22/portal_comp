
var menu_gov_br = [
  { label: "menugovbr01", site: "https://www.gov.br/pt-br/orgaos-do-governo" },
  { label: "menugovbr02", site: "http://www.acessoainformacao.gov.br" },
  { label: "menugovbr03", site: "http://www4.planalto.gov.br/legislacao" },
  { label: "menugovbr04", site: "https://www.gov.br/governodigital/pt-br/acessibilidade-digital" },
  { label: "menugovbr05", site: '"#" onclick="setLang(' + (getLang()+1)%2 + ');return false;"' }
];

var menu_site = [
  { label: "menu01", submenus: [
    { label: "menu01-01", pc: "p_hist"},
    { label: "menu01-02", pc: "p_cont"},
    { label: "menu01-03", pc: "p_ldisci"},
    { label: "menu01-04", pc: "p_prof"},
    { label: "menu01-05", pc: "p_disc"},
    { label: "menu01-06", pc: "p_egre"}] },
  { label: "menu03", submenus: [
    { label: "menu03-01", pc: "p_notc"},
    { label: "menu03-02", pc: "p_oqts"},
    { label: "menu03-03", pc: "p_cldr"},
    { label: "menu03-04", pc: "p_nleg"},
    { label: "menu03-05", pc: "p_repd"}] },
  { label: "menu04", submenus: [
    { label: "menu04-1", pc: "p_prcd&id_p=1"},
    { label: "menu04-2", pc: "p_prcd&id_p=2"},
    { label: "menu04-3", pc: "p_prcd&id_p=3"},
    { label: "menu04-4", pc: "p_prcd&id_p=4"},
    { label: "menu04-5", pc: "p_prcd&id_p=5"},
    { label: "menu04-6", pc: "p_prcd&id_p=6"},
    { label: "menu04-7", pc: "p_prcd&id_p=7"},
    { label: "menu04-8", pc: "p_prcd&id_p=8"},
    { label: "menu04-9", pc: "p_prcd&id_p=9"},
    { label: "menu04-10", pc: "p_prcd&id_p=10"},
    { label: "menu04-11", pc: "p_prcd&id_p=11"},
    { label: "menu04-12", pc: "p_prcd&id_p=12"},
    { label: "menu04-13", pc: "p_prcd&id_p=13"},
    { label: "menu04-14", pc: "p_prcd&id_p=14"},
    { label: "menu04-15", pc: "p_prcd&id_p=15"}] },
  { label: "menu05", submenus: [
    { label: "menu05-01", pc: "p_faqs"},
    { label: "menu05-02", pc: "p_isol"},
    { label: "menu05-03", pc: "p_fale"}] }
];

var menu_site_capes = [
  { label: "menu06-01", site: "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/avaliacao/sobre-a-avaliacao/areas-avaliacao/sobre-as-areas-de-avaliacao/colegio-de-ciencias-exatas-tecnologicas-e-multidisciplinar/ciencias-exatas-e-da-terra/ciencia-da-computacao"},
  { label: "menu06-02", site: "https://sucupira.capes.gov.br/sucupira/public/consultas/coleta/veiculoPublicacaoQualis/listaConsultaGeralPeriodicos.jsf"}
];

var menu_site_gov_br = [
  { label: "menusitegovbr01", site: "https://www.gov.br/pt-br/acesse-sua-conta-gov.br" },
  { label: "menusitegovbr02", site: "https://www.gov.br/pt-br/guia-de-edicao-de-servicos-do-gov.br" },
  { label: "menusitegovbr03", site: "https://www.gov.br/pt-br/orgaos-do-governo" },
  { label: "menusitegovbr04", site: "https://www.gov.br/pt-br/todosportodos" }
];

var redes_sociais = [
 {type: "facebook", site: "https://www.facebook.com/pgscime/", label: "Facebook"}
];


var Contexto = function() {
    this.pagina = "";
};


Contexto.prototype = {
    setPagina: function(umaPagina) {
      this.pagina = umaPagina;
    },

    headerGovBr: function() {
      var retorno = '<div class="portal-name"><a href="https://www.gov.br/pt-br" class="portal-logo"><span class="sr-only">Portal Gov.br</span></a></div>';
      retorno += '<div class="site-header-links"><div class="links-rapidos"><ul><li class="titulo">Acesso rápido</li>';
      for (anItem of menu_gov_br) {
        retorno += '<li><a href="' + anItem.site + '" target="_blank">' + getLabel(anItem.label) + '</a></li>';
      }
      retorno += '</ul></div>';
      return retorno;
    },

    siteName: function() {
      return '<a href="" title="Graduação">' + getLabel('site-name') + '</a>';
    },

    montaMenu: function() {
      var retorno = '';

      for(mnItem of menu_site) {
        retorno += '<li class="dropdown-submenu"><a class="plain">' + getLabel(mnItem.label) + '</a><ul class="submenu">';
        for (mnSubItem of mnItem.submenus) {
          retorno += '<li><a href="' + homeUrl + mnSubItem.pc + '" class="state-published">' + getLabel(mnSubItem.label) + '</a></li>';
        }
        retorno += '</ul></li>';
      }

      retorno += '<li class="dropdown-submenu"><a class="plain">' + getLabel("menu06") + '</a><ul class="submenu">';
      for (anItem of menu_site_capes) {
        retorno += '<li class="plain"><a href="' + anItem.site + '" target="_blank" class="state-published">' + getLabel(anItem.label) + '</a></li>';
      }
      retorno += '</ul></li>';

      return retorno;
    },

    montaMenuGovBr: function() {
      var retorno = '<li id="portaltab-govbr-root" class="plain dropdown-submenu menu-govbr-root">';
      retorno += '<a class="plain"><span>GOV.BR</span></a><ul class="submenu navTree">';
      for (anItem of menu_site_gov_br) {
        retorno += '<li class="plain"><a href="' + anItem.site + '" target="_blank" class="hasDropDown">' + getLabel(anItem.label) + '</a></li>';
      }
      retorno += '</ul></li>';
      return retorno;
    },

    montaBreadcrumbs: function() {
      var retorno = '';

      if (dynamicContent.toUpperCase() == 'P_HOME') retorno += '';
      else {
        if ( (dynamicContent.toUpperCase() == 'P_LSTD') || (dynamicContent.toUpperCase() == 'P_DETD') || (dynamicContent.toUpperCase() == 'P_PRCD') ) retorno += this.pagina.specialBreadcrumbs();
        else {
          retorno += '<nav id="breadcrumbs" aria-label="Histórico de navegação (Breadcrumbs)"><div class="content"><span class="sr-only">Você está aqui:</span>';
          retorno += '<span class="home"><a href="' + siteUrl + '"><span class="fas fa-home" aria-hidden="true"></span><span class="sr-only">Página Inicial</span></a></span>';

          var label01 = '';
          var label02 = '';
          for(mnItem of menu_site) {
            for (mnSubItem of mnItem.submenus) {
              if (dynamicContent == mnSubItem.pc) {
                label01 = getLabel(mnItem.label);
                label02 = getLabel(mnSubItem.label);
              }
            }
          }
          retorno += '<span dir="ltr" id="breadcrumbs-1"><a>' + label01 + '</a></span>';
          retorno += '<span dir="ltr" id="breadcrumbs-3"><span id="breadcrumbs-current">' + label02 + '</span></span>';

          if (dynamicContent == 'p_prcd') {
            retorno += '<span dir="ltr" id="breadcrumbs-3"><span id="breadcrumbs-current">' + getLabel("menu04-"+getParameterByName('id_p')) + '</span></span>';
          }
          retorno += '</div></nav>';        
        }
      }

      return retorno;
    },

    referenciaAntigo: function() {
      var retorno = '';
      if (getLang() == 0) {
        retorno = '<div class="tile tile-default" id="de377639-e521-47f7-845a-49f7b1dc77aa"><div class="cover-richtext-tile tile-content"><p class="callout" style="text-align: left;" data-mce-style="text-align: left;"><strong>Nosso portal está em migração. Não encontrou o que procurava? Acesse o portal antigo: <span style="color: rgb(0, 0, 255);"><a class="external-link" href="http://www.comp.ime.eb.br/old-pos-v02" target="_blank"><span style="color: rgb(0, 0, 255);">PGSC - Antigo</span></a></span><br /></strong></p></div></div>';
      }
      return retorno;
    },

    redesSociais: function() {
      var retorno = '<div class="redes-sociais"><div class="titulo">' + getLabel("rede_social") + '</div><ul class="portal-redes">';
      for (rs of redes_sociais) {
        retorno += '<li class="portalredes-' + rs.type + ' portalredes-item"><a href="' + rs.site + '" target="_blank">' + rs.label + '</a></li>';
      }
      retorno += '</ul></div><div id="footer-brasil"></div>';
      return retorno;
    },

    notaCopyright: function() {
      return '<span omit-tag="">' + getLabel("copy_note") + '.</span>';
    },

    geraPagina: function() {
      document.title = 'PGSC :: ' + this.pagina.label();
      document.getElementById("govbr-header").innerHTML = this.headerGovBr();
      document.getElementById("site-name").innerHTML = this.siteName();
      document.getElementById("main-menu").innerHTML = this.montaMenu() + this.montaMenuGovBr();
      document.getElementById("portal-breadcrumbs-wrapper").innerHTML = this.montaBreadcrumbs();
      document.getElementById("content").innerHTML = this.pagina.conteudo() + this.referenciaAntigo();
      document.getElementById("site-footer").innerHTML = '';
      document.getElementById("redes-sociais").innerHTML = this.redesSociais();
      document.getElementById("copy-txt").innerHTML = this.notaCopyright();
    }
};


var theClass = dynamicContent.replace("_", "").toUpperCase();
var pageObject;

try {
  var pageObject = (Function('return new ' + theClass))();
} catch(e) {
  window.location.assign(homeUrl + "p_home");
}

var assembler = new Contexto();
assembler.setPagina(pageObject);

assembler.geraPagina();


