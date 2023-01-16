// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/global.scss'
import '../scripts/language.js'
import '../scripts/parallax.js'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';
import { html } from 'd3';

console.log('Hello, world!');

let tableofcontents = document.querySelector('.tableofcontents');

function toggleTable() {
    tableofcontents.classList.toggle('active');
}
tableofcontents.addEventListener("click", toggleTable)