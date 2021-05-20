
//texts in page
var phist_txt_br = {
  'head': "Histórico",
  'label': "Histórico",
  'par-01': "A origem da criação do curso de Engenharia de Computação remonta ao ano 1984, quando o Centro Tecnológico do Exército e pela então Diretoria de Informática (atual CITEX - Centro Integrado de Telemática do Exército) mapearam as carências computacionais do Exército e verificaram que o curso tradicional de Engenharia Eletrônica do IME já não atendia às necessidades da Força Terrestre.",
  'par-02': "Assim, no ano de 1985, ingressaram no 3º ano os primeiros alunos do atual curso de Engenharia de Computação do IME. Na ocasião, o currículo adotado pelo IME considerou as propostas da ACM, IEEE e da Universidade Carnegie Mellon (CMU). O curso denominou-se inicialmente Eletrônica com Ênfase em Informática, em decorrência de preceito legal que determinava, às novas engenharias, terem origem nas já existentes.",
  'par-03': "Ainda em 1985, o IME participou, juntamente com várias universidades do Rio de Janeiro (UFRJ, UFF, UFRRJ, UERJ e PUC-Rio), das reuniões promovidas pelo CREA/RJ, por meio da sua Câmara Eletricista, cujos estudos em 1987, confirmaram a necessidade do estabelecimento de nova área autônoma de engenharia denominada Engenharia de Computação.",
  'par-04': "No ano de 1987, aqueles 5 alunos que ingressaram no então 3º ano de Eletrônica com Ênfase em Informática tornaram-se os primeiros engenheiros de computação formados no Brasil, já adotando a atual taxonomia.",
  'par-05':"Estudos realizados em 1986 foram homologados pelo Conselho Federal de Engenharia em 1993, por meio da Resolução 380, que definiu as atribuições dos Engenheiros de Computação ou Engenheiros Eletricistas com Ênfase em Computação.",
  'par-06':"O IME compartilha com a PUC-Rio o pioneirismo desta engenharia de concepção integradora, centrada nos conhecimentos do software, equipamentos computacionais (hardware) e matemática intensiva.",
  'par-07':"Desde a sua criação, em 1985, até o ano de 2019, o IME formou 419 engenheiros de computação."

}

var phist_txt_en = {
  'head': "History and Mission",
  'label': "About PGSC",
  'par-01': "The Military Institute of Engineering is the Brazilian Army engineering Institute. It descends from the Royal Academy of Artillery, Fortification and Design, created in 1972, considered to be the first Engineering School of the Americas and the third of the world. IME is small but prizes excellence, imparting knowledge in engineering through comprehensive undergraduate and graduage programs, research, dissemination through scholarly publications, and service to the community, the Army, and the nation.",
  'par-02': "The Graduate Program in Computer Engineering at IME emerged in 1972, focusing in Operational Research and Applied Mathematics. An year later, it stated focusing in Informatics. Years of collaboration between these three options and the increasing importance of cross-discipline expertise naturally led to the idea of merging these entities into a single Systems and Computing Program, in 1986.",
  'par-03': "The mission of the Systems and Computing Program is to expand knowledge and benefit society through research integrated with education. We investigate the most challenging, fundamental problems in science and technology in an interdisciplinary atmosphere, while educating students to become creative members of society. The Program admits both civilian and military applicants.",
  'par-04': ""
}


var PHIST = function() {
    this.langTxt = ( getLang() == 0 ) ? phist_txt_br : phist_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PHIST.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p><p>' + this.langTxt['par-02'] + '</p><p>' + this.langTxt['par-03'] + '.</p><p>' + this.langTxt['par-04']+ '</p><p>' + this.langTxt['par-05'] + '</p><p>' + '</p><p>' + this.langTxt['par-06'] + '</p><p>' +this.langTxt['par-07'] +'</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
