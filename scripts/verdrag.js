const tableofcontents = document.querySelector('.tocnl');
const tableofcontentspt = document.querySelector('.tocpt');
const tableofcontentsen = document.querySelector('.tocen');

const verdrag = document.getElementById('verdrag');
const verdragen = document.getElementById('verdrag-en');
const verdragpt = document.getElementById('verdragpt');

const handtekeningtoggle = document.getElementById("teken");
const handtekeningtoggleen = document.getElementById("sign");
const handtekeningtogglept = document.getElementById("sinal");

const verscheurKnop = document.getElementById("verscheur");
const verscheurKnopen = document.getElementById("tear");
const verscheurKnoppt = document.getElementById("rasgar");

const show = document.getElementsByClassName("showbijondertekening");
const wafel = document.getElementById("wafel");
const wafeltekst = document.getElementById("wafelnl");
const wafelteksten = document.getElementById("wafelen");
const wafeltekstpt = document.getElementById("wafelpt");
const pnl = document.getElementById("wafelpnl");
const pen = document.getElementById("wafelpen");
const ppt = document.getElementById("wafelppt");

var theLanguage = document.getElementsByTagName("html")[0].getAttribute("lang");
var html = document.querySelector("html");

function verdragNl() {
    tableofcontents.classList.toggle('active');
}
verdrag.addEventListener("click", verdragNl)

function verdragEn(){
    tableofcontentsen.classList.toggle('active');
}
verdragen.addEventListener("click", verdragEn)

function verdragPt(){
    tableofcontentspt.classList.toggle('active');
}
verdragpt.addEventListener("click", verdragPt)

function verdragTeken() {
    tableofcontents.classList.toggle('active');
    verscheurKnop.style.display = "block";
    wafel.setAttribute("src", "./images/oangeworld/waffle-6-oranje.png")
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '1';
    }
    handtekeningtoggle.style.display = "none";
    wafeltekst.innerHTML = "<strong>-</strong>$140 Miljoen";
    pnl.innerHTML = "Zonder <strong>$140 Miljoen</strong> gaan maar 6% van de kinderen naar school";
    verdrag.style.display = "none";
}
handtekeningtoggle.addEventListener("click", verdragTeken)

function verdragTekenEN(){
    tableofcontentsen.classList.toggle('active');
    verscheurKnopen.style.display = "block";
    wafel.setAttribute("src", "./images/oangeworld/waffle-6-oranje.png")
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '1';
    }
        handtekeningtoggleen.style.display = "none";
        wafelteksten.innerHTML = "<strong>-</strong>$140 Million";
        pen.innerHTML = "Without <strong>$140 Million</strong> only 6% of children go to school";
        verdragen.style.display = "none";
}
handtekeningtoggleen.addEventListener("click", verdragTekenEN)

function verdragTekenPT(){
    tableofcontentspt.classList.toggle('active');
    verscheurKnoppt.style.display = "block";
    wafel.setAttribute("src", "./images/oangeworld/waffle-6-oranje.png")
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '1';
    }
    handtekeningtogglept.style.display = "none";
    wafeltekstpt.innerHTML = "<strong>-</strong>$140 Milhões";
    ppt.innerHTML = "Sem <strong>$140 Milhões</strong>, apenas 6% das crianças vão para a escola";
    verdragpt.style.display = "none";
    verdrag.style.display = "none";
}
handtekeningtogglept.addEventListener("click", verdragTekenPT)

function verdragVerscheur() {
    tableofcontents.classList.toggle('active');
    verscheurKnop.style.display = "none";
    wafel.setAttribute("src", "./images/oangeworld/waffle-100-oranje.png")
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '0';
    }
    handtekeningtoggle.style.display = "block";
    wafeltekst.innerHTML = "<strong>+</strong>$140 Miljoen";
    pnl.innerHTML = "Met de <strong>$140 Miljoen</strong> kan elk kind naar school";
    verdrag.style.display = "block";
}
verscheurKnop.addEventListener("click", verdragVerscheur)

function verdragVerscheurEN(){
    tableofcontentsen.classList.toggle('active');
    verscheurKnopen.style.display = "none";
    wafel.setAttribute("src", "./images/oangeworld/waffle-100-oranje.png")
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '0';
    }
    handtekeningtoggleen.style.display = "block";
    wafelteksten.innerHTML = "<strong>+</strong>$140 Million";
    pen.innerHTML = "With <strong>$140 Million</strong> every child can go to school";
    verdragen.style.display = "block";
}
verscheurKnopen.addEventListener("click", verdragVerscheurEN)

function verdragVerscheurPT(){
    tableofcontentspt.classList.toggle('active');
    verscheurKnoppt.style.display = "none";
    wafel.setAttribute("src", "./images/oangeworld/waffle-100-oranje.png")
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '0';
    }
    handtekeningtogglept.style.display = "block";
    wafeltekstpt.innerHTML = "<strong>+</strong>$140 Milhões";
    ppt.innerHTML = "Com <strong>$140 Milhões</strong>, cada criança pode ir para a escola";
    verdragpt.style.display = "block";
}
verscheurKnoppt.addEventListener("click", verdragVerscheurPT)
