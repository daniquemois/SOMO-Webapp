const ondertekenKnop = document.querySelector('.onderteken');
const tableofcontents = document.querySelector('.tableofcontents');
const verdrag = document.querySelector('.verdragpl');
const handtekeningtoggle = document.getElementById("teken");
const verscheurKnop = document.getElementById("verscheur");
const show = document.getElementsByClassName("showbijondertekening");
const wafel = document.getElementById("wafel");
const wafeltekst = document.getElementById("wafelnl");
const wafelteksten = document.getElementById("wafelen");
const wafeltekstpt = document.getElementById("wafelpt");
const pnl = document.getElementById("wafelpnl");
const pen = document.getElementById("wafelpen");
const ppt = document.getElementById("wafelppt");

function verdragSluiten() {
    tableofcontents.classList.toggle('active');
    verdrag.classList.toggle('hide');
    ondertekenKnop.classList.toggle('hide');
}
ondertekenKnop.addEventListener("click", verdragSluiten)

function verdragTeken() {
    tableofcontents.classList.toggle('active');
    verdrag.style.display = "none";
    ondertekenKnop.style.display = "none";
    handtekeningtoggle.style.display = "none";
    verscheurKnop.style.display = "block";
    wafel.setAttribute("src", "./images/oangeworld/waffle-6-oranje.png")
    wafeltekst.innerHTML = "<strong>-</strong>$140 Miljoen";
    wafelteksten.innerHTML = "<strong>-</strong>$140 Million";
    wafeltekstpt.innerHTML = "<strong>-</strong>$140 Milhões";
    pnl.innerHTML = "Zonder <strong>$140 Miljoen</strong> gaan maar 6% van de kinderen naar school";
    pen.innerHTML = "Without <strong>$140 Million</strong> only 6% of children go to school";
    ppt.innerHTML = "Sem <strong>$140 Milhões</strong>, apenas 6% das crianças vão para a escola";
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '1';
    }
}
handtekeningtoggle.addEventListener("click", verdragTeken)

function verdragVerscheur() {
    tableofcontents.classList.toggle('active');
    verdrag.style.display = "block";
    ondertekenKnop.style.display = "block";
    verscheurKnop.style.display = "none";
    handtekeningtoggle.style.display = "block";
    wafel.setAttribute("src", "./images/oangeworld/waffle-100-oranje.png")
    wafeltekst.innerHTML = "<strong>+</strong>$140 Miljoen";
    wafelteksten.innerHTML = "<strong>+</strong>$140 Million";
    wafeltekstpt.innerHTML = "<strong>+</strong>$140 Milhões";
    pnl.innerHTML = "Met de <strong>$140 Miljoen</strong> kan elk kind naar school";
    pen.innerHTML = "With <strong>$140 Million</strong> every child can go to school";
    ppt.innerHTML = "Com <strong>$140 Milhões</strong>, cada criança pode ir para a escola";
    for (var i = 0; i < show.length; i++) {
        var element = show[i];
        element.style.opacity = '0';
    }
}
verscheurKnop.addEventListener("click", verdragVerscheur)