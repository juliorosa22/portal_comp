
//data file
useDataResource('tb-graduacao.js');
useDataResource('tb-aluno-grad.js');
useDataResource('tb-professor.js');
useDataResource('tb-aauxdefesa.js');


//texts in page
var pdisc_txt_br = {
  'head': "Corpo Discente da Graduação",
  'label': "Alunos",
  'par-01': "defesa em",
  'par-02': "Abaixo, encontra-se a lista de alunos regularmente matriculados no Curso.",
  'par-03': "Discentes regularmente matriculados"
}

var pdisc_txt_en = {
  'head': "Faculty Students",
  'label': "Students",
  'par-01': "presents in",
  'par-02': "Below, you can find the list of the Master's course current students.",
  'par-03': "Current Students"
}


var PDISC = function() {
    this.langTxt = ( getLang() == 0 ) ? pdisc_txt_br : pdisc_txt_en;
    this.contentTitle = this.langTxt['head'];
};

PDISC.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    montaData: function(str) {
        if (getLang() == 0) return str.substring(6) + '/' + str.substring(4, 6) + '/' + str.substring(0, 4);
        else return str.substring(4, 6) + '/' + str.substring(6) + '/' + str.substring(0, 4);
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

    recOrientador: function(cod) {
        var result = alasql("SELECT nome, graduacao FROM ? WHERE codigo="+cod,[professor]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        return this.recGraduacao(anItem.value.graduacao) + ' ' + anItem.value.nome;
    },

    recPrazo: function(aluno, prazoInicial) {
        var result = alasql("SELECT data FROM ? WHERE aluno="+aluno,[defesa]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        var retorno = this.montaData(prazoInicial);
        if (!anItem.done) retorno = this.langTxt['par-01'] + ' ' + this.montaData(anItem.value.data);

        return retorno;
    },

    listaDiscentes: function(rotulo, identificador) {

        var retorno = '';

        var result = alasql("SELECT * FROM ? WHERE estado='A' ORDER BY matricula",[aluno]);
        let it = result[Symbol.iterator]();
        var anItem = it.next();

        while (!anItem.done) {
          retorno += '<td style="text-align: left;">SC ' + anItem.value.matricula + '&nbsp;</td>';
          retorno += '<td style="text-align: left;">' + this.recGraduacao(anItem.value.graduacao) + ' ' + anItem.value.nome + '&nbsp;</td>';
          retorno += '<td style="text-align: left;">' + this.recOrientador(anItem.value.orientP) + '&nbsp;</td>';
          retorno += '<td style="text-align: left;">' + this.recPrazo(anItem.value.matricula, anItem.value.prazo) + '&nbsp;</td></tr>';

          anItem = it.next();
        }

        return retorno;
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-02'] + '</p><h2>' + this.langTxt['par-03'] + '</h2>';

        dContent += '<table border="0" class="arquivos" summary=""><tbody>';
        dContent += '<tr class="bg"><strong>&nbsp;</strong></td><td style="text-align: left;" width="90"><strong>' + getLabel('codigo').toUpperCase() + '</strong></td><td style="text-align: left;" width="320"><strong>' + getLabel('nome').toUpperCase() + '</strong></td><td style="text-align: left;" width="350"><strong>' + getLabel('or-princ').toUpperCase() + '</strong></td><td style="text-align: left;" width="200"><strong>' + getLabel('prazo').toUpperCase() + '</strong></td></tr>';

        dContent += this.listaDiscentes();
        dContent += '</tbody></table></div></div><div id="viewlet-below-content-body"><div class="visualClear"><!-- --></div><div class="documentActions"></div></div><br />'

        return dContent;
    }
};
