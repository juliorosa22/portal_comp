
var pt_br = {
  'site-name': " (Copia do Site Projeto Integrador CFrm) Graduação em Engenharia de Computação - IME",
//
  'menugovbr01': "Órgãos do Governo",
  'menugovbr02': "Acesso à Informação",
  'menugovbr03': "Legislação",
  'menugovbr04': "Acessibilidade",
  'menugovbr05': "en-us",
//
  'menu01': "Sobre a Graduação",
  'menu01-01': "Apresentação",
  'menu01-02': "Histórico",
  'menu01-03': "Corpo Docente",
  'menu01-04': "Egressos",
  'menu01-05': "Disciplinas",

//
  'menu02': "Central de Conteúdos",
  'menu02-01': "PFC",

//
  'menu03': "Conheça",
  'menu03-01':"Ministério da Defesa",
  'menu03-02':"Exército Brasileiro",
  'menu03-03':"DCT",
  'menu03-04':"Defesa Cibernética",
  'menu03-05':"IME",
//
  'menu04': "Canais de Atendimento",
  'menu04-01': "Fale Conosco",
//
  'menu05': "Links CAPES",
  'menu05-01': "CA-CC",
  'menu05-02': "Qualis",
//
  'menusitegovbr01': "Acesse sua conta gov.br",
  'menusitegovbr02': "Guia de Edição de Serviços do Gov.br",
  'menusitegovbr03': "Órgãos do Governo",
  'menusitegovbr04': "Todos por Todos",
//
  'e': "e",
  'aqui': "aqui",
  'rede_social': "Redes Sociais",
  'copy_note': "Seção de Ensino de Engenharia de Computação (SE/9) - IME, Praça Gen. Tibúrcio 80 - CEP: 22290-270 - Pr Vermelha, Rio de Janeiro, RJ",
  'ult_noticias': "Últimas Notícias",
  'conh_programa': "Conheça o Programa",
  'conh_grad':"Conheça a Engenharia de Computação",
  'publ-em': "Publicado em",
  'prox_def': "Próximas Defesas",
  'def_diss': "Defesa de Dissertação",
  'aluno': "Aluno",
  'orient': "Orientador",
  'pl-simples': "s",
  'pl-composto': "es",
  'linha_pesq': "Linha de Pesquisa",
  'ime': "Instituto Militar de Engenharia",
  'pgsc': "Programa de Pós-graduação em Sistemas e Computação",
  'cmdt-dir': "Comandante e Diretor de Ensino",
  'ch-depq': "Chefe da Divisão de Ensino e Pesquisa",
  'ch-sd1': "Chefe da Subdivisão de Cursos de Pós-graduação",
  'ch-se9': "Chefe da Seção de Ensino de Engenharia de Computação",
  'coord': "Coordenador",
  'coord-adj': "Coordenador Adjunto",
  'nome': "Nome",
  'interesses': "Interesses",
  'contato': "Contato",
  'lattes': "Lattes",
  'codigo': "Código",
  'or-princ': "Orientador Principal",
  'prazo': "Prazo",
  'disc': "Disciplina",
  'cred': "Créditos",
  'horario': "Horário",
  'sala': "Sala",
  'url': "url",
  'proc-doc': "você vai precisar dos seguintes documentos",
  'proc': "procedimento",
  'prof': "Professor",
  'a_combinar': "A combinar"
};

var en_us = {
  'site-name': "Graduate Program in Systems and Computing (IME - PGSC)",
//
  'menugovbr01': "Government Agencies",
  'menugovbr02': "Acess to Information",
  'menugovbr03': "Legislation",
  'menugovbr04': "Acessibility",
  'menugovbr05': "pt-br",
//
  'menu01': "About Graduate",
  'menu01-01': "Presentation",
  'menu01-02': "History",
  'menu01-03': "Faculty",
  'menu01-04': "Student",
  'menu01-05': "Curriculum",

//
  'menu02': "Content Central",
  'menu02-01': "PFCs",

//
  'menu03': "Projects",
  'menu03-01':"Defesa Cibernética",
  'menu03-02':"Lab Ds",

//
  'menu04': "Communication Channels",
  'menu04-01': "Contact Us",
//
  'menu05': "Links CAPES",
  'menu05-01': "CA-CC",
  'menu05-02': "Qualis",
//
  'menusitegovbr01': "Acess your gov.br account",
  'menusitegovbr02': "Gov.br Services",
  'menusitegovbr03': "Government Agencies",
  'menusitegovbr04': "Everyone for Everyone",
//
  'e': "and",
  'aqui': "here",
  'rede_social': "Social Networks",
  'copy_note': "Computer Engineering Department (SE/9) - IME, Praça Gen. Tibúrcio 80 - ZIP: 22290-270 - Pr Vermelha, Rio de Janeiro, RJ",
  'ult_noticias': "Latest News",
  'conh_programa': "More About the Program",
  'publ-em': "Published in",
  'prox_def': "Upcoming Dissertation Presentations",
  'def_diss': "Dissertation Presentation",
  'aluno': "Student",
  'orient': "Advisor",
  'pl-simples': "s",
  'pl-composto': "s",
  'linha_pesq': "Reserch Area",
  'ime': "Military Institute of Engineering",
  'pgsc': "Graduate Program in Systems and Computing",
  'cmdt-dir': "Commander and Chancellor",
  'ch-depq': "Teaching and Research Division Chief",
  'conh_grad':"Conheça a Engenharia de Computação",
  'ch-sd1': "Graduate Courses Subdivision Chief",
  'ch-se9': "Computer Engineering Department Chief",
  'coord': "Program Coordinator",
  'coord-adj': "Assistant Program Coordinator",
  'nome': "Name",
  'interesses': "Interests",
  'contato': "Contact",
  'lattes': "Lattes",
  'codigo': "Code Number",
  'or-princ': "Main Advisor",
  'prazo': "Deadline",
  'disc': "Course",
  'cred': "Credits",
  'horario': "Days",
  'sala': "Room",
  'url': "url",
  'proc-doc': "you will need the following documents",
  'proc': "procedure",
  'prof': "Teacher",
  'a_combinar': "To combine"
};

function getLang() {
  var lang = getCookie("lang");
  if (lang != "") {
    if (lang == "0") return 0;
    else return 1;
  }
  return 0;
}

function setLang(id_l) {
  setCookie("lang", id_l, 1);
  document.location.reload(true)
}

function getLabel(lbname) {
  if (getLang() == 1) return en_us[lbname];
  return pt_br[lbname];
}
