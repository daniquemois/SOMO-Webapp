let notaENG = document.getElementById("notaen")
let notaNL = document.getElementById("notanl")
let notaPT = document.getElementById("notapt")
let buttonENG = document.getElementById("buttonnotaen")
let buttonNL = document.getElementById("buttonnotanl")
let buttonPT = document.getElementById("buttonnotapt")
let buttonlegaal = document.getElementById("buttonlegaal")
let buttonlegal = document.getElementById("buttonlegal")
let buttonlegalpt = document.getElementById("buttonlegalpt")
var theLanguage = document.getElementsByTagName("html")[0].getAttribute("lang");
var html = document.querySelector("html");

var engelsButton = document.querySelector(".engels")
var portugeesButton = document.querySelector(".portugees")
var nederlandsButton = document.querySelector(".nederlands")

function aangifteLegaal(){
    if(theLanguage == "en"){
        notaENG.setAttribute("src", "./images/data/form-groen-ENG.png")
        buttonENG.innerHTML = "Make use of tax evasion"
        buttonlegal.style.display = "none"
        buttonENG.style.display = "block"
    }
    if(theLanguage == "nl"){
        buttonlegaal.style.display = "none"
        notaNL.setAttribute("src", "./images/data/from-groen-NL.png")
        buttonNL.innerHTML = "Maak gebruik van belastingontduiking"
        buttonNL.style.display = "block"
    }
    else{
        notaPT.setAttribute("src", "./images/data/form-groen-PT.png")
        buttonPT.innerHTML = "Faça uso de sonegação fiscal"
        buttonlegalpt.style.display = "none"
        buttonPT.style.display = "block"
    }
}
buttonlegaal.addEventListener("click", aangifteLegaal)
buttonlegal.addEventListener("click", aangifteLegaal)
buttonlegalpt.addEventListener("click", aangifteLegaal)

function aangifteIllegaal(){
    if(theLanguage == "en"){
        buttonlegal.style.display = "block"
        buttonENG.style.display = "none"
        notaENG.setAttribute("src", "./images/data/form-blauw-ENG.png")
        buttonENG.innerHTML = "Just pay your taxes legally"
    }
    if(theLanguage == "nl"){
        buttonNL.style.display = "none"
        buttonlegaal.style.display = "block"
        notaNL.setAttribute("src", "./images/data/form-blauw-NL.png")
        buttonNL.innerHTML = "Betaal gewoon je belastingen legaal"
    }
    else{
        buttonPT.style.display = "none"
        buttonlegalpt.style.display = "block"
        notaPT.setAttribute("src", "./images/data/form-blauw-PT.png")
        buttonPT.innerHTML = "Pague seus impostos legalmente"
    }
}
buttonENG.addEventListener("click", aangifteIllegaal)
buttonNL.addEventListener("click", aangifteIllegaal)
buttonPT.addEventListener("click", aangifteIllegaal)


