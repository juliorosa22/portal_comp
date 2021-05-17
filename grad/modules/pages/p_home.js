
//data file
useDataResource('tb-graduacao.js');
useDataResource('tb-professor.js');
useDataResource('tb-aluno.js');
useDataResource('tb-linhapesquisa.js');
useDataResource('tb-aauxdefesa.js');
useDataResource('tb-noticia.js');

//texts in page
var phome_txt_br = {
  'head': "Engenharia de Computação - Graduação / IME",
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
  'par-01': "Welcome to the Graduate Program in Systems and Computing of the Military Institute of Engineering (IME).",
  'par-02': "The Military Institute of Engineering is the Brazilian Army engineering Institute. It descends from the Royal Academy of Artillery, Fortification and Design, created in 1972, considered to be the first Engineering School of the Americas and the third of the world. IME is small but prizes excellence, imparting knowledge in engineering through comprehensive undergraduate and graduage programs, research, dissemination through scholarly publications, and service to the community, the Army, and the nation.",
  'par-03': "The mission of the Systems and Computing Program is to expand knowledge and benefit society through research integrated with education. We investigate the most challenging, fundamental problems in science and technology in an interdisciplinary atmosphere, while educating students to become creative members of society. The Program admits both civilian and military applicants."
}

var PHOME = function() {
    this.langTxt = ( getLang() == 0 ) ? phome_txt_br : phome_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PHOME.prototype = {
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
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu01-01") + '"><span class="front"><span class="titulo">' + getLabel("menu01-01") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu05-01") + '"><span class="front"><span class="titulo">' + getLabel("menu05-01") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu02-03") + '"><span class="front"><span class="titulo">' + getLabel("menu02-03") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu03-02") + '"><span class="front"><span class="titulo">' + getLabel("menu03-02") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu03-05") + '"><span class="front"><span class="titulo">' + getLabel("menu03-05") + '</span></span></a></div>';
        retorno += '<div class="card"><a class="govbr-card-content" href="' + homeUrl + this.recPC("menu05-03") + '"><span class="front"><span class="titulo">' + getLabel("menu05-03") + '</span></span></a></div>';
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

    recAluno: function(id) {
        var result = alasql('SELECT nome FROM ? WHERE matricula='+id,[aluno]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        return anItem.value.nome;
    },

    recGraduacao: function(grad) {
        if (grad == 12) return '';
        else {
          var result = alasql("SELECT descricao FROM ? WHERE codigo="+grad,[graduacao]);
          let it = result[Symbol.iterator]();
          var anItem = it.next();

          return anItem.value.descricao[getLang()];
        }
    },

    recOrientadores: function(lista) {
        var retorno = '';
        var qtdOrientadores = lista.length;

        while (lista.length != 0) {
          var result = alasql("SELECT nome, graduacao FROM ? WHERE codigo="+lista.shift(),[professor]);
          let it = result[Symbol.iterator]();
          var anItem = it.next();

          retorno += this.recGraduacao(anItem.value.graduacao) + ' ' + anItem.value.nome + ', ';
        }

        retorno = retorno.substring(0, retorno.length-2);

        var rotulo = '<span class="descricao"><strong>' + getLabel("orient");
        if (qtdOrientadores > 1) rotulo += getLabel("pl-composto");
        rotulo += '</strong>: ';

        return rotulo + retorno + '</span>';
    },

    recLinha: function(key) {
        var result = alasql("SELECT nome FROM ? WHERE codigo="+key,[linha_pesquisa]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();
        return anItem.value.nome[getLang()];
    },

    recListaDefesas: function() {
        var retorno = '';

        var today = new Date();
        var todayStr = today.getFullYear() + ((today.getMonth()+1 < 10) ? '0':'') + (today.getMonth()+1) + ((today.getDate() < 10) ? '0':'') + today.getDate();

        var result = alasql("SELECT * FROM ? WHERE data >= '" + today.getFullYear() + "0000' ORDER BY data, hora ASC",[defesa]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var flag = 0;
        while (!anItem.done) {
          if ( parseInt(anItem.value.data) >= parseInt(todayStr) ) {
            if (flag == 0) {
              retorno += '<br /><div id="viewlet-above-content-body"></div><div class="row"><div class="row-content"><div class="column col-md-12 " data-panel=""><div class="tile tile-default" id="b94"><div class="cover-collection-tile tile-content"><div class="outstanding-header tile-content" style="text-align: center;"><h2 class="outstanding-title">' + getLabel("prox_def") + '</h2><br /></div>';

              flag++;
            }
            retorno += '<div class="collection-item"><ul class="noticias listagem-noticias-com-foto"><li><div class="conteudo">';
            retorno += '<span class="descricao"><strong>' + getLabel("def_diss").toUpperCase() + ': ' + this.montaData(anItem.value.data) + ' - ' + this.montaHora(anItem.value.hora) + ' h</strong></span>';
            retorno += '<h2 class="titulo"><a>' + anItem.value.titulo + '</a></h2><span class="descricao">';
            retorno += '<strong>' + getLabel("aluno") + '</strong>: ' + this.recAluno(anItem.value.aluno) + '</span>';
            retorno += this.recOrientadores(anItem.value.orientador);
            retorno += '<span class="descricao"><strong>' + getLabel("linha_pesq") + '</strong>: ' + this.recLinha(anItem.value.lp) + '</span></div></li></ul></div>';
          }

          anItem = it.next();
        }

        if(flag > 0) retorno += '<div class="visualClear"><!-- --></div></div></div></div></div></div>';

        return retorno;
    },

    conteudo: function() {
        // calculations...

        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p><p>' + this.langTxt['par-02'] + '</p><p>' + this.langTxt['par-03'] + '</p><p>' + this.langTxt['par-04'] + '</p><p>' +  '</p><p>' + this.langTxt['par-05'] + '</p><p>' + '</p><p>' + this.langTxt['par-06'] + '</p><p>'+ '</p><p>' + this.langTxt['par-07']  +'</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div>';

        if (getLang() == 0) dContent += this.recNoticias(); else dContent += '<div id="viewlet-above-content-body"></div><br />';
        dContent += this.recAtuacao();
        dContent += this.recListaDefesas();

        return dContent;
    }
};

