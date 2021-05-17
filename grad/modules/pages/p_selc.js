

//data file
useDataResource('tb-aauxgeral.js');

//texts in page
var pselc_txt_br = {
  'head': "Seleção de Candidatos ao PGSC",
  'label': "Seleção",
  'par-01': "As inscrições para o processo de seleção de candidatos civis e militares da reserva, tanto das Forças Armadas Brasileiras, quanto das Forças Amigas, ao curso de Mestrado em Sistemas e Computação do IME são feitas através da Subdivisão de Cursos de Pós-graduação (SD/1). Maiores informações sobre como se candidatar (documentação necessária, procedimentos, etc) podem ser vistos",
  'par-02': "A seleção de candidatos para o PGSC é efetuada por análise curricular, considerando tanto a capacidade de orientação em cada Linha de Pesquisa do Curso, como o interesse dos candidatos.",
  'par-03': "É importante notar que um curso de pós-graduação se baseia nas atividades de pesquisa desenvolvidas principalmente pela interação dos docentes e discentes do Programa. Assim, uma escolha criteriosa da linha de pesquisa ou área temática em que o candidato deseja desenvolver seu trabalho é fundamental. Para auxiliar neste processo de escolha, você pode consultar uma breve descrição das Linhas de Pesquisa do curso.",
  'par-04': "Também é importante verificar os temas de interesse de pesquisa dos Docentes do curso a fim de verificar a capacidade de orientação no tema desejado. Assim, a escolha criteriosa da Linha de Pesquisa pretendida e, possivelmente, do professor orientador preferencial é essencial ao bom desenvolvimento do processo de seleção.",
  'par-suspensa': "O processo de seleção encontra-se suspenso",
  'par-encerrada': "O processo de seleção para o próximo período letivo se encerrou em",
  'par-aberta': "O processo de seleção para o próximo período  estará aberto entre"
}

var pselc_txt_en = {
  'head': "Admissions for the Systems and Computing Program",
  'label': "Admissions",
  'par-01': "Applicants to the Master's Degree of the Computer Engineering Department (SE/9) should preferably be graduated in Computer Science, Engineering, Physics, Mathematics or related areas. Full details of the application (including required documentation and application fee) can be seen",
  'par-02': "The selection of candidates for the Master Course of the Computer Engineering Section (SE/9) of the IME is carried out by curricular analysis, considering both the orientation capacity in each line of research of the Course and the interest of the candidates.",
  'par-03': "Note that a postgraduate course is mainly based on the research activities developed by the advisors and students. Thus, an appropriate choice of the research line in which the applicant wishes to work is fundamental. To assist in this process of choice, see the Course Search Lines and the list with the names of the Teaching Professors. With this information, each candidate must select a research line and write their Study Proposal (a basic research project). Additionally, the candidate can indicate a supervisor of his / her preference, based on the desired research line and on any previous knowledge of the supervisor and his or her work.",
  'par-04': "Therefore, the careful choice of the desired research line and the preferred guiding teacher is essential to the successful development of the selection process. PPGSC advisors are available to applicants, either in person or by e-mail, for further clarification of their research activities.",
  'par-suspensa': "The admission process is currently suspended",
  'par-encerrada': "The admission process for the next term ended in",
  'par-aberta': "The admission process for the next term is open between"
}


var PSELC = function() {
    this.langTxt = ( getLang() == 0 ) ? pselc_txt_br : pselc_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PSELC.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    montaUrlAqui: function() {
        return '<a href="' + info_selecao_sd1 + '" target="_blank">' + getLabel('aqui') + '</a>';
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
    },

    proxSelAberta: function() {
        var today = new Date();
        var todayStr = today.getFullYear() + ((today.getMonth()+1 < 10) ? '0':'') + (today.getMonth()+1) + ((today.getDate() < 10) ? '0':'') + today.getDate();

        return ((todayStr >= proxSelecao['inicio']) && (todayStr <= proxSelecao['fim']));
    },

    procSelecao: function() {
        if (proxSelSuspensa) return '<strong style="color:red">' + this.langTxt['par-suspensa'] + '</strong>.';
        else {
          if ( !this.proxSelAberta() ) return '<strong style="color:red">' + this.langTxt['par-encerrada'] + ' ' + this.montaData(ultSelecao['fim']) + '</strong>.';
          else return '<strong style="color:red">' + this.langTxt['par-aberta'] + ' ' + this.montaData(proxSelecao['inicio']) + ' ' + getLabel("e") + ' ' + this.montaData(proxSelecao['fim']) + '</strong>.';
        }
    },

    conteudo: function() {
        // calculations...

        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + ' ' + this.montaUrlAqui() + '.</p><p>' + this.procSelecao() + '</p><p>' + this.langTxt['par-02'] + '</p><p>' + this.langTxt['par-03'] + '</p><p>' + this.langTxt['par-04'] + '</p></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};

