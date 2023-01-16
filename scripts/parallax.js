let layer1 = document.getElementById('greenlayer1');
let layer2 = document.getElementById('greenlayer2');
let layer3 = document.getElementById('greenlayer3');
let layer4 = document.getElementById('greenlayer4');
let layer5 = document.getElementById('greenlayer5');
let layer6 = document.getElementById('greenlayer6');
let layer7 = document.getElementById('greenlayer7');
let layer8 = document.getElementById('greenlayer8');
let button1 = document.querySelector('.info1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    layer1.style.top = value * 1.8 + 'px';
    layer2.style.top = value * 1.5 + 'px';
    // layer3.style.top = value * 1.4 + 'px';
    // layer4.style.top = value * 1.8 + 'px';
    // layer5.style.top = value * 1.8 + 'px';
    layer6.style.top = value * 1.5 + 'px';
    layer7.style.top = value * 1.5 + 'px';
    button1.style.top = value * 1.5 + 'px';
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
button1.addEventListener("click", textEffect)