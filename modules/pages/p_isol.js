
//data file
useDataResource('tb-formulario.js');


//texts in page
var pisol_txt_br = {
  'head': "Inscrição em Disciplina Isolada no PGSC",
  'label': "Disciplina Isolada",
  'par-01': "Entende-se como inscrição em disciplina isolada, nos cursos de Pós-graduação do IME, o direito a cursar disciplina, recebendo, ao final, declaração com registro de nota/conceito e frequência. O deferimento de inscrição em Disciplina Isolada a candidatos externos, não caracteriza vínculo com IME para qualquer fim.",
  'par-02': "Atualmente, o PGSC admite inscrição em Disciplina Isolada SOMENTE para um solicitante que seja ALUNO DE PÓS-GRADUAÇÃO de algum outro Programa credenciado pela CAPES.",
  'par-03': "As disciplinas oferecidas pelo PGSC no período podem ser vistas na página QTS (ver Menu - Central de Conteúdos). Para solicitar matrícula em disciplina isolada, por favor, entre em contato, via e-mail com a Coordenação do PGSC (ver Menu - Fale Conosco).",
  'par-04': '&bullet; Documento de Identificação (com foto) - 02 (duas) cópias;<br />&bullet; fotos 3x4 recentes -  02 (duas);<br />&bullet; Declaração de Matrícula em curso de Pós-graduação - 01 (uma) cópia;<br />&bullet; Histórico Escolar do curso de Pós-graduação -  01 (uma) cópia;<br />&bullet; $f id=8 $f -  02 (duas) vias preenchidas e assinadas.;<br />&bullet; $f id=6 $f - 02 (duas) vias preenchidas e assinadas.<br />',
  'par-05': 'I. Quem deseja realizar matrícula em disciplina isolada no PGSC, <u>primeiro precisa realizar consulta à Coordenação do curso</u>, por meio de contato eletrônico (ver Menu - Canais de Atendimento - Fale Conosco), acerca da disponibilidade de inscrição em disciplina isolada (a consulta não garante a vaga na disciplina, somente a disponibilidade da mesma poder ser cursada como isolada).<br />II. Caso seja possível atender à solicitação de inscrição, o solicitante deve entregar a documentação acima na Secretaria da SE/9 durante a semana de matrícula em disciplinas (ver Menu - Central de Conteúdos - Calendário Escolar, "Matrícula em disciplinas").'
}

var pisol_txt_en = {
  'head': "Enrollment for Non-degree-seeking Students",
  'label': "Non-degree Enrollment",
  'par-01': "If you want to enroll in a class for credit, but are not admitted into a degree program at the Military Institute of Engineering, you may enroll as a non-degree-seeking student. Non-degree enrollment status does not require a formal admission process or formal entrance requirements. Enrollment as a non-degree student does not guarantee regular admission to the Institute.",
  'par-02': "Currently, the Graduate Program in Systems and Computing is only accepting applicantions from non-degree-seeking students that are admitted in another Graduate Program accredited by CAPES.",
  'par-03': "To check the course offerings for non-degree-seeking students, please check the Course Offering page. To register, please contact the Program Coordination.",
  'par-04': '&bullet; Documento de Identificação (com foto) - 02 (duas) cópias;<br />&bullet; fotos 3x4 recentes -  02 (duas);<br />&bullet; Declaração de Matrícula em curso de Pós-graduação - 01 (uma) cópia;<br />&bullet; Histórico Escolar do curso de Pós-graduação -  01 (uma) cópia;<br />&bullet; $f id=8 $f -  02 (duas) vias preenchidas e assinadas.;<br />&bullet; $f id=6 $f - 02 (duas) vias preenchidas e assinadas.<br />',
  'par-05': 'I. Quem deseja realizar matrícula em disciplina isolada no PGSC, <u>primeiro precisa realizar consulta à Coordenação do curso</u>, por meio de contato eletrônico (ver Menu - Canais de Atendimento - Fale Conosco), acerca da disponibilidade de inscrição em disciplina isolada (a consulta não garante a vaga na disciplina, somente a disponibilidade da mesma poder ser cursada como isolada).<br />II. Caso seja possível atender à solicitação de inscrição, o solicitante deve entregar a documentação acima na Secretaria da SE/9 durante a semana de matrícula em disciplinas (ver Menu - Central de Conteúdos - Calendário Escolar, "Matrícula em disciplinas").'
}


var PISOL = function() {
    this.langTxt = ( getLang() == 0 ) ? pisol_txt_br : pisol_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PISOL.prototype = {
    label: function() {
        return this.langTxt['label'];
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

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '.</p><p><strong style="color:red;">' + this.langTxt['par-02'] + '</strong></p><p>' + this.langTxt['par-03'] + '</p>';
        if (getLang() == 0) {
          dContent += '<p><h3>' + getLabel("proc-doc").toUpperCase() + '</h3>' + this.prepParagrafo(this.langTxt['par-04']) + '</p><p><h3>' + getLabel("proc").toUpperCase() + '</h3>' + this.langTxt['par-05'] + '</p>';
        }
        dContent += '</div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
    }
};

