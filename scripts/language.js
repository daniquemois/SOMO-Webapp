var engelsButton = document.querySelector(".engels")
var portugeesButton = document.querySelector(".portugees")
var nederlandsButton = document.querySelector(".nederlands")
var theLanguage = document.getElementsByTagName("html")[0].getAttribute("lang");
var html = document.querySelector("html");
const tableofcontents = document.querySelector('.tocnl');
const tableofcontentspt = document.querySelector('.tocpt');
const tableofcontentsen = document.querySelector('.tocen');

function Engelsfunctie(){
    if(theLanguage == "pt" || theLanguage == "nl"){
        html.setAttribute("lang", "en")
        tableofcontentsen.style.backgroundImage = "url(./images/verdrag/blanco-verdrag-engels.png)"
    }
}
engelsButton.addEventListener("click", Engelsfunctie)

function Portugeesfunctie(){
    if(theLanguage == "en" || theLanguage == "nl"){
        html.setAttribute("lang", "pt")
        tableofcontentspt.style.backgroundImage = "url(./images/verdrag/blanco-verdrag-spaans.png)"
    }
}
portugeesButton.addEventListener("click", Portugeesfunctie)

function Nederlandsfunctie(){
    if(theLanguage == "pt" || theLanguage == "en"){
        html.setAttribute("lang", "nl")
        tableofcontents.style.backgroundImage = "url(../images/Verdrag-noblack.png)"
    }
    else{
        html.setAttribute("lang", "nl")
        tableofcontents.style.backgroundImage = "url(../images/Verdrag-noblack.png)"
    }
}
nederlandsButton.addEventListener("click", Nederlandsfunctie)
