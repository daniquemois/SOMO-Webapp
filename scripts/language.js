var engelsButton = document.querySelector(".engels")
var portugeesButton = document.querySelector(".portugees")
var nederlandsButton = document.querySelector(".nederlands")
var theLanguage = document.getElementsByTagName("html")[0].getAttribute("lang");
var html = document.querySelector("html");

function Engelsfunctie(){
    if(theLanguage == "pt" || theLanguage == "nl"){
        html.setAttribute("lang", "en")
    }
}
engelsButton.addEventListener("click", Engelsfunctie)

function Portugeesfunctie(){
    if(theLanguage == "en" || theLanguage == "nl"){
        html.setAttribute("lang", "pt")
    }
}
portugeesButton.addEventListener("click", Portugeesfunctie)

function Nederlandsfunctie(){
    if(theLanguage == "pt" || theLanguage == "en"){
        html.setAttribute("lang", "nl")
    }
    else{
        html.setAttribute("lang", "nl")
    }
}
nederlandsButton.addEventListener("click", Nederlandsfunctie)
