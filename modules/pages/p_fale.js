
//texts in page
var pfale_txt_br = {
  'head': "Fale Conosco",
  'label': "Contato",
  'par-01': 'Para facilitar o contato com o PGSC, as seguintes opções são disponibilizadas para o atendimento de demandas. <span style="font-weight: bold;">No entanto, se você tem alguma dúvida sobre os procedimentos acadêmicos do PGSC, por favor, veja primeiro as informações em Procedimentos Acadêmicos antes de entrar em contato direto conosco</span>.',
  'par-02': "Eletrônico",
  'par-03': "Via e-mail oficial do programa no endereço",
  'par-04': "Presencial",
  'par-05': "Atendimento presencial na Secretaria da SE/9 (IME, 4o andar), de segunda-feira a quinta-feira, das 13 às 16 horas.",
  'par-06': "Telefônico",
  'par-07': "Atendimento telefônico, de segunda-feira a quinta-feira, das 13 às 16 horas, pelo número:"
}

var pfale_txt_en = {
  'head': "Contact Us",
  'label': "Contact",
  'par-01': 'You can contact us on the details below. <span style="font-weight: bold;">However, if you have general questions about the Program, please chech the FAQ page before contacting the Program Coordination</span>.',
  'par-02': "E-mail",
  'par-03': "Official Program Coordination e-mail",
  'par-04': "Main Address",
  'par-05': "Pça Gen Tiburcio 80, Praia Vermelha, Rio de Janeiro/RJ - 4th floor. Office hours: 1PM to 4PM.",
  'par-06': "Phone",
  'par-07': "Please call from 1PM to 4PM (current local time in Brazil): + 55 "
}


var PFALE = function() {
    this.langTxt = ( getLang() == 0 ) ? pfale_txt_br : pfale_txt_en;
    this.contentTitle = this.langTxt['head'];
}

PFALE.prototype = {
    label: function() {
        return this.langTxt['label'];
    },

    conteudo: function() {
        // calculations...
        var dContent = '<div id="viewlet-above-content-title"></div><h1 class="documentFirstHeading">' + this.contentTitle + '</h1><div id="viewlet-below-content-title"></div><div id="viewlet-above-content-body"></div><div id="content-core"><div id="parent-fieldname-text"><p>' + this.langTxt['par-01'] + '</p><p><img src="' + siteUrl + imgDir + 'laptop.jpg" width="30" height="30" style="vertical-align:sub;">&nbsp;<strong>' + this.langTxt['par-02'] + '</strong> - ' + this.langTxt['par-03'] + ': ' + emPgsc + '</p><p><img src="' + siteUrl + imgDir + 'ies.jpg" width="30" height="30" style="vertical-align:sub;">&nbsp;<strong>' + this.langTxt['par-04'] + '</strong> - ' + this.langTxt['par-05'] + '</p><p><img src="' + siteUrl + imgDir + 'tel.jpg" width="30" height="30" style="vertical-align:sub;">&nbsp;<strong>' + this.langTxt['par-06'] + '</strong> - ' + this.langTxt['par-07'] + ' ' + tfPgsc + '</p><br />';

        return dContent;
    }
};

