let layer1 = document.getElementById('greenlayer1');
let layer2 = document.getElementById('greenlayer2');
let layer3 = document.getElementById('greenlayer3');
let layer4 = document.getElementById('greenlayer4');
let layer5 = document.getElementById('greenlayer5');
let layer6 = document.getElementById('greenlayer6');
let layer7 = document.getElementById('greenlayer7');
let layer8 = document.getElementById('greenlayer8');
let button1 = document.getElementById('info1');
let titel = document.getElementById("titel");
let titelen = document.getElementById("titelen");
let titelpt = document.getElementById("titelpt");

let olayer1 = document.getElementById("orangeworldlayer1");
let olayer2 = document.getElementById("orangeworldlayer2");
let olayer3 = document.getElementById("orangeworldlayer3");
let olayer4 = document.getElementById("orangeworldlayer4");
let olayer5 = document.getElementById("orangeworldlayer5");

let bluelayer1 = document.getElementById("blueworldlayer1");
let bluelayer2 = document.getElementById("blueworldlayer2");
let bluelayer3 = document.getElementById("blueworldlayer3");
let bluelayer4 = document.getElementById("blueworldlayer4");

let character1 = document.getElementById("greenworld");
let character2 = document.getElementById("orangeworld");
let character3 = document.getElementById("blueworld");

window.addEventListener('scroll', () => {
    let value = window.scrollY; 
    layer2.style.top = value * 1.5 + 'px';
    layer1.style.top = value * 1.8 + 'px';
})

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    let startSection = document.querySelector("#orangeworld").offsetTop;

    window.onscroll = function() {
        currentScroll = window.pageYOffset;
      }

    if(currentScroll > startSection){
        olayer2.style.transform = "translateY(" + (currentScroll - startSection) * 1.3 + "px)";
        olayer4.style.transform = "translateY(" + (currentScroll - startSection) * 1.8 + "px)";
    }
})

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    let blueSection = document.querySelector("#blueworld").offsetTop;

    window.onscroll = function() {
        currentScroll = window.pageYOffset;
      }

    if(currentScroll > blueSection){
        bluelayer1.style.transform = "translateY(" + (currentScroll - blueSection) * 1.3 + "px)";
        // bluelayer2.style.transform = "translateY(" + (currentScroll - blueSection) * 1.8 + "px)";
    }
})



var index = 0;
var textnl = 'Wil jij ook 0% belasting betalen? Scroll dan snel verder!';
var texten = 'Do you also want to pay 0% tax? Then quickly scroll on!';
var textpt = 'Você também quer pagar 0% de imposto? Em seguida, role rapidamente!';
var speed = 50;
  
function textEffect() {
    if(document.getElementsByTagName("html")[0].getAttribute("lang") == "en"){
        if (index < texten.length) {
            document.getElementById("intro")
                    .innerHTML += texten.charAt(index);
            index++;
            setTimeout(textEffect, speed);
        }
    }
    if(document.getElementsByTagName("html")[0].getAttribute("lang") == "nl"){
        if (index < textnl.length) {
            document.getElementById("intro")
                    .innerHTML += textnl.charAt(index);
            index++;
            setTimeout(textEffect, speed);
        }
    }
    else{
        if (index < textpt.length) {
            document.getElementById("intro")
                    .innerHTML += textpt.charAt(index);
            index++;
            setTimeout(textEffect, speed);
        }
    }
}
character1.addEventListener("click", textEffect)

var index2 = 0;
var text2nl = 'Wil jij weten welke landen een slecht verdrag hebben met Mozambique? Scroll dan snel verder!';
var text2en = 'Do you also want to know which countries have a bad treaty with Mozambique? Then quickly scroll on!';
var text2pt = "Você também quer saber quais países têm um tratado ruim com Moçambique? Em seguida, role rapidamente!";
var speed = 50;
  
function text2Effect() {
    if(document.getElementsByTagName("html")[0].getAttribute("lang") == "en"){
        if (index2 < text2en.length) {
            document.getElementById("kaarttekst")
                    .innerHTML += text2en.charAt(index2);
            index2++;
            setTimeout(text2Effect, speed);
        }
    }
    if(document.getElementsByTagName("html")[0].getAttribute("lang") == "nl"){
        if (index2 < text2nl.length) {
            document.getElementById("kaarttekst")
                    .innerHTML += text2nl.charAt(index2);
            index2++;
            setTimeout(text2Effect, speed);
        }
    }
    else{
        if (index2 < text2pt.length) {
            document.getElementById("kaarttekst")
                    .innerHTML += text2pt.charAt(index2);
            index2++;
            setTimeout(text2Effect, speed);
        }
    }
}
character2.addEventListener("click", text2Effect)


var index3 = 0;
var text3nl = 'Ik kan eindelijk weer naar school! Bedankt voor je hulp!';
var text3en = 'I can finally go back to school! Thanks for your help!';
var text3pt = "Eu posso finalmente voltar para a escola! Obrigado pela sua ajuda!";
var speed = 50;
  
function tekst3Effect() {
    if(document.getElementsByTagName("html")[0].getAttribute("lang") == "en"){
        if (index3 < text2en.length) {
            document.getElementById("oplossingtekst")
                    .innerHTML += text2en.charAt(index3);
            index3++;
            setTimeout(tekst3Effect, speed);
        }
    }
    if(document.getElementsByTagName("html")[0].getAttribute("lang") == "nl"){
        if (index3 < text3nl.length) {
            document.getElementById("oplossingtekst")
                    .innerHTML += text3nl.charAt(index3);
            index3++;
            setTimeout(tekst3Effect, speed);
        }
    }
    else{
        if (index3 < text3pt.length) {
            document.getElementById("oplossingtekst")
                    .innerHTML += text3pt.charAt(index3);
            index3++;
            setTimeout(tekst3Effect, speed);
        }
    }
}
character3.addEventListener("click", tekst3Effect)