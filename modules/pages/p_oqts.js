
//data file
useDataResource('tb-aauxqts.js');
useDataResource('tb-professor.js');
useDataResource('tb-ofertadisciplina.js');
useDataResource('tb-disciplina.js');


//texts in page
var poqts_txt_br = {
  'head': "Quadro de Trabalho Semanal (QTS) do PGSC",
  'label': "QTS",
  'par-01': "As disciplinas abaixo estão disponíveis para o período.",
  'par-02': "(*) Somente as disciplinas marcadas com asterisco estão disponíveis para serem cursadas como isolada. Não se esqueça de enviar uma mensagem para a coordenação solicitando a sua vaga antes de realizar a matrícula."
}

var poqts_txt_en = {
  'head': "Course Offerings",
  'label': "Offerings",
  'par-01': "The following graduate courses will be available for registration in the term.",
  'par-02': "(*) Only the courses marked are available for non-degree-seeking student enrollment. Please contact the Program Coordination to ask about the availability/conditions to enroll as a non-degree-seeking student."
}


var POQTS = function() {
    this.langTxt = ( getLang() == 0 ) ? poqts_txt_br : poqts_txt_en;
    this.contentTitle = this.langTxt['head'];
}

POQTS.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    recIsolada: function(key) {

      if (key != 0) return '*';
      else return '';
    },

    recDocentes: function(lista) {

        var retorno = '';

        while (lista.length != 0) {
          var result = alasql("SELECT nome FROM ? WHERE codigo="+lista.shift(),[professor]);
          let it = result[Symbol.iterator]();
          var anItem = it.next();

          retorno += anItem.value.nome + ' / <br />';
        }

        retorno = retorno.substring(0, retorno.length-9);
        return retorno;
    },

    recSala: function(key) {

        var result = alasql("SELECT descricao FROM ? WHERE codigo ="+key,[sala]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        return anItem.value.descricao[getLang()];
    },

    recHorario: function(dia, hora, num_creditos) {

        var ret_dia = '';
        var ret_hora = '';

        if (dia != 0) {
          var result = alasql("SELECT descricao FROM ? WHERE codigo ="+dia,[dia_semana]);
          let it = result[Symbol.iterator]();
          var anItem = it.next();

          ret_dia = anItem.value.descricao[getLang()] + ': ';
          if (hora < 10) ret_hora = '0';
          ret_hora += hora+'-'+(hora + num_creditos - 1)+'h';
        }
        else {
          if (hora == 0) ret_hora = getLabel('a_combinar');
          else ret_hora = '-----';
        }
      
        return ret_dia + ret_hora;
    },

    recDisciplina: function(key) {
        var result = alasql("SELECT * FROM ? WHERE codigo ='"+key+"'",[disciplina]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        return anItem.value;
    },

    listaQts: function() {

        var retorno = '';

        var result = alasql("SELECT * FROM ? WHERE ano="+infoQts.ano+" AND periodo="+infoQts.periodo+" ORDER BY dia, hora",[oferta_disciplina]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          var disciplina = this.recDisciplina(anItem.value.disc);
          var horario = this.recHorario(anItem.value.dia, anItem.value.hora, disciplina.creditos);
          var sala = this.recSala(anItem.value.sala);

          retorno += '<tr style="text-align: left;"><td>' + disciplina.codigo + '</td>';
          retorno += '<td style="text-align: left;">' + disciplina.nome[getLang()] + this.recIsolada(anItem.value.isolada) + '</td>';
          retorno += '<td style="text-align: center;">' + disciplina.creditos + '</td>';
          retorno += '<td style="text-align: center;">' + horario + ' - ' + sala + '</td>';
          retorno += '<td style="text-align: left;">' + this.recDocentes(anItem.value.professor) + '</td></tr>';

          anItem = it.next();
        }

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + ' (' + infoQts.ano + '/' + infoQts.periodo + ')</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p><p>' + this.langTxt['par-02'] + '</p>';

        dContent += '<table border="0" class="arquivos" summary=""><tbody>';
        dContent += '<tr class="bg"><td style="text-align: left;" width="110"><strong>' + getLabel('codigo').toUpperCase() + '</strong></td><td style="text-align: left;" width="330"><strong>' + getLabel('disc').toUpperCase() + '</strong></td><td style="text-align: center;" width="110"><strong>' + getLabel('cred').toUpperCase() + '</strong></td><td style="text-align: center;" width="220"><strong>' + getLabel('horario').toUpperCase() + ' e ' + getLabel('sala').toUpperCase() + '</strong></td><td style="text-align: left;"><strong>' + getLabel('prof').toUpperCase() + '</strong></td></tr>';

        dContent += this.listaQts();
        dContent += '</tbody></table></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />';

        return dContent;
     }
};
