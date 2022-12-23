var engelsButton = document.querySelector(".engels")
var portugeesButton = document.querySelector(".portugees")
var theLanguage = document.getElementsByTagName("html")[0].getAttribute("lang");
var html = document.querySelector("html");

function Engelsfunctie(){
    if(theLanguage == "pt"){
        html.setAttribute("lang", "en")
    }
    else{
        html.setAttribute("lang", "en")
    }
}
engelsButton.addEventListener("click", Engelsfunctie)

function Portugeesfunctie(){
    if(theLanguage == "en"){
        html.setAttribute("lang", "pt")
    }
}
portugeesButton.addEventListener("click", Portugeesfunctie)