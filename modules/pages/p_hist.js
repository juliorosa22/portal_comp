
//texts in page
var phist_txt_br = {
  'head': "História e Missão do PGSC",
  'label': "História do PGSC",
  'par-01': "O Instituto Militar de Engenharia (IME) é uma instituição acadêmica de nível superior pertencente ao Exército Brasileiro. O IME é herdeiro da Real Academia de Artilharia, Fortificação e Desenho, criada em 1792 e considerada a primeira escola de Engenharia das Américas e a terceira do mundo. O IME oferece cursos de graduação e pós-graduação em Engenharia, sendo considerado um centro de excelência e referência nacional e internacional no ensino da Engenharia.",
  'par-02': "No IME, o ensino e a pesquisa em computação, em nível de pós-graduação, começou com a criação do Programa de Mestrado em Engenharia de Sistemas em 1972, com enfoque em Pesquisa Operacional e Matemática Aplicada. Um ano mais tarde, em 1973, impulsionado pela evolução tecnológica e de mercado, o curso foi levado a criar uma nova frente, dessa vez voltada especificamente para a área de Informática. Este Programa foi a semente do atual Programa de Pós-graduação em Sistemas e Computação (PGSC) da Seção de Engenharia da Computação (SE/9) do IME, que iniciou seus trabalhos em 1986.",
  'par-03': "A missão do PGSC é preparar profissionais qualificados, com base científica e tecnológica, capazes de conduzir projetos de pesquisa e desenvolvimento de novas tecnologias na área de Engenharia de Computação. Busca-se cumprir esta missão ao contribuir para a melhoria e aperfeiçoamento do ensino, pesquisa, desenvolvimento e inovação nesta área para atender às demandas da sociedade brasileira. O PGSC aceita inscrições de candidatos civis e militares (tanto das Forças Armadas do Brasil, quanto de Nações Amigas).",
  'par-04': "Os objetivos específicos do PPGSC do IME são:<br />&bullet; Promover a investigação científica e tecnológica na área de Engenharia de Computação.<br />&bullet; Formar recursos humanos altamente qualificados para atividades de ensino, pesquisa, desenvolvimento e inovação."
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
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p><p>' + this.langTxt['par-02'] + '</p><p>' + this.langTxt['par-03'] + '.</p><p>' + this.langTxt['par-04'] + '</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};
