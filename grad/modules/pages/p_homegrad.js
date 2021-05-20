
//data file

useDataResource('tb-noticia.js');

//texts in page
var phome_txt_br = {
  'head': "Engenharia de Computação HomeGrad - Graduação / IME",
  'par-01': "A Seção de Ensino (Departamento Acadêmico) Engenharia de Computação no IME tem como objetivo produzir conhecimento e formar recursos humanos nos níveis de graduação e pós-graduação. A qualidade dos alunos formados é comprovada, entre outros qualificadores, por meio de suas colocações no mercado de trabalho. Os egressos do IME ocupam posição de destaque em indústrias, universidades e institutos de pesquisa.",
  'par-02': "O curso (ver histórico) foi o primeiro criado no Brasil, em 1985, e tem por objetivo formar engenheiros capacitados para a integração matemática-hardware-software, segundo moderna visão sistêmica. Concorrendo na área Engenharia de Computação, os alunos obtiveram o primeiro lugar em desempenho na prova do ENADE dos anos de 2014, 2017 e 2018. Destacando-se entre os primeiros em desempenho geral no ENADE, o curso de Engenharia de Computação do IME contribui para o desenvolvimento nacional com o sucesso da participação dos seus egressos nas empresas e indústrias e, sobretudo, atende as necessidades de engenharia do Exército Brasileiro.",
  'par-03': "A integração com a pós-graduação em Sistemas e Computação também é um diferencial importante.",
  'par-04': "Todos os docentes do núcleo permanente do Programa de Mestrado ministram aulas no Curso de Graduação em Engenharia de Computação, integrantes da mesma Seção de Ensino (Departamento Acadêmico) do IME. Além disso, o corpo docente mantém uma intensiva orientação acadêmica de alunos da graduação em temas de Projeto de Fim de Curso (PFC).",
  'par-05': "Os mais relevantes trabalhos da graduação são beneficiados pela publicação e divulgação, à semelhança do mestrado, com o Código Brasileiro do ISSN, obtido do Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT).",
  'par-06': "Os projetos representativos da integração da graduação com o mestrado resultam em participações, publicações e premiações em eventos, dos quais destacam-se, entre outros:",
  'par-07':"O curso de Engenharia de Computação do IME destaca-se pelo seu pioneirismo e pela sua excelência, sendo um dos principais centros de referência no Brasil do ensino de graduação nesta engenharia."
}

var phome_txt_en = {
  'head': "Graduate Program in Systems and Computing / IME",
  'par-01': "The course (see history) was the first created in Brazil, in 1985, and aims to train engineers trained in mathematical-hardware-software integration, according to a modern systemic view. Competing in the Computer Engineering area, students obtained the first place in performance in the ENADE test of the years 2014, 2017 and 2018. Standing out among the first in general performance at ENADE, the Computer Engineering course at IME contributes to national development with the successful participation of its graduates in companies and industries and, above all, meets the engineering needs of the Brazilian Army.",
  'par-02': "The Military Institute of Engineering is the Brazilian Army engineering Institute. It descends from the Royal Academy of Artillery, Fortification and Design, created in 1972, considered to be the first Engineering School of the Americas and the third of the world. IME is small but prizes excellence, imparting knowledge in engineering through comprehensive undergraduate and graduage programs, research, dissemination through scholarly publications, and service to the community, the Army, and the nation.",
  'par-03': "The integration with the postgraduate course in Systems and Computing is also an important differential.",
  'par-04':"All professors of the permanent core of the Master's Program teach classes in the Undergraduate Course in Computer Engineering, members of the same Teaching Section (Academic Department) of IME. In addition, the faculty maintains intensive academic guidance from undergraduate students on End of Course Project (PFC) themes.",
  'par-05':"The most relevant undergraduate works are benefited by publication and dissemination, similar to the master's degree, with the Brazilian ISSN Code, obtained from the Brazilian Institute of Information in Science and Technology (IBICT).",
  'par-06':"Representative projects for the integration of undergraduate and master's degrees result in participations, publications and awards at events, of which the following stand out, among others:",
  'par-07':"The Computer Engineering course at IME stands out for its pioneering spirit and excellence, being one of the main reference centers in Brazil for undergraduate teaching in this engineering."
}

var PHOME_GRAD = function() {
    this.langTxt = ( getLang() == 0 ) ? phome_txt_br : phome_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PHOME_GRAD.prototype = {
    label: function() {
        return "Home";
    },

    recNoticias: function() {
        var retorno = '';

        var topQty = ( noticia.length < 3 ) ? noticia.length : 3;

        if (topQty > 0) {
          retorno += '<br /><div id="viewlet-above-content-body"></div><div class="row"><div class="row-content"><div class="column col-md-12 " data-panel=""><div class="tile tile-default" id="b94"><div class="cover-collection-tile tile-content"><div class="outstanding-header tile-content" style="text-align: center;"><h2 class="outstanding-title">' + getLabel("ult_noticias") + '</h2><br /></div>';

          var result = alasql('SELECT TOP '+topQty+' * FROM ? ORDER BY id DESC',[noticia]);
          let it = result[Symbol.iterator]();
          var anItem = it.next();

          while (!anItem.done) {
            retorno += '<div class="collection-item"><ul class="noticias listagem-noticias-com-foto"><li><div class="conteudo">';
            retorno += '<span class="descricao"><strong>' + getLabel("publ-em").toUpperCase() + ': ' + this.montaData(anItem.value.data) + '</strong></span>';
            retorno += '<h2 class="titulo"><a>' + anItem.value.titulo + '</a></h2><span>' + anItem.value.corpo + '</span></div></li></ul></div>';
            anItem = it.next();
          }
          retorno += '<div class="visualClear"><!-- --></div></div></div></div></div></div>';
        }
        return retorno;
    },

    recPC: function(aLabel) {
        for(mnItem of menu_site) {
          for (mnSubItem of mnItem.submenus) {
            if (mnSubItem.label == aLabel) return mnSubItem.pc;
          }
        }
        return '';
    },

    recAtuacao: function() {
        var retorno = '<div><div class="outstanding-header tile-content" style="text-align: center;"><h2 class="outstanding-title">' + getLabel('conh_programa') + '</h2><br /></div><div class="govbr-cards centralizar-cars"><div class="wrapper">';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu01-02") + '"><span class="front"><span class="titulo">' + getLabel("menu01-02") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu05-01") + '"><span class="front"><span class="titulo">' + getLabel("menu05-01") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu01-05") + '"><span class="front"><span class="titulo">' + getLabel("menu01-05") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu02-01") + '"><span class="front"><span class="titulo">' + getLabel("menu02-01") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu03-01") + '"><span class="front"><span class="titulo">' + getLabel("menu03-01") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu04-01") + '"><span class="front"><span class="titulo">' + getLabel("menu04-01") + '</span></span></a></div>';
        retorno += '</div></div></div>';
        return retorno;
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
    },

    montaHora: function(str) {
        return str.substring(0, 2) + ':' + str.substring(2);
    },

    conteudo: function() {
        // calculations...

        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p><p>' + this.langTxt['par-02'] + '</p><p>' + this.langTxt['par-03'] + '</p><p>' + this.langTxt['par-04'] + '</p><p>' +  '</p><p>' + this.langTxt['par-05'] + '</p><p>' + '</p><p>' + this.langTxt['par-06'] + '</p><p>'+ '</p><p>' + this.langTxt['par-07']  +'</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div>';

        if (getLang() == 0) dContent += this.recNoticias(); else dContent += '<div id="viewlet-above-content-body"></div><br />';
        dContent += this.recAtuacao();
        //dContent += this.recListaDefesas();

        return dContent;
    }
};

