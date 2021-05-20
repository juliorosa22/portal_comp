

var siteUrl = "./";
var homeUrl = siteUrl + "?pc=";

var formDir = 'modules/files/formularios/';
var imgDir = 'modules/images/';

var emPgsc = "coord_pg_se9@ime.eb.br";
var tfPgsc = "(21) 2546-7099";

var site_sd1 = "http://www.ime.eb.mil.br/pt/informacoes-gerais.html";

// Set the language cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function getParameterByName(name, url) {
  console.log('inside getParameterByName');
  
  if (!url) url = window.location.href;
  
  name = name.replace(/[\[\]]/g, "\\$&");
  
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  console.log(results);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function useDataResource(url) {
  document.write(unescape("%3Cscript src='./modules/database/" + url + "' type='text/javascript'%3E%3C/script%3E"));
}

// Give the parameter a variable name
var dynamicContent = getParameterByName('pc');
console.log(dynamicContent);
if (dynamicContent === null) dynamicContent = "p_home";

var jsFile = "./modules/pages/" + dynamicContent + ".js";
document.write(unescape("%3Cscript src='" + jsFile + "' type='text/javascript'%3E%3C/script%3E"));

