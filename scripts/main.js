// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/global.scss'
import '../scripts/language.js'
import '../scripts/parallax.js'
import '../scripts/verdrag.js'


// We can use node_modules directely in the browser!
import * as d3 from 'd3';

console.log('Hello, world!');

let tocnl = document.querySelector('.tocnl');
let tocpt = document.querySelector('.tocpt');
let tocen = document.querySelector('.tocen');

function toggleTable() {
    tocnl.classList.toggle('active');
}
tocnl.addEventListener("click", toggleTable)

function toggleTablept() {
    tocpt.classList.toggle('active');
}
tocpt.addEventListener("click", toggleTablept)

function toggleTableen() {
    tocen.classList.toggle('active');
}
tocen.addEventListener("click", toggleTableen)

function setWindowSize() {
    var width = window.innerWidth - 25;
    var height = window.innerHeight;
    // ! World Map
    const worldMap = d3
      .select("#map")
      .attr("width", width)
      .attr("height", height);
  
    var g = worldMap.append("g");
    var projection = d3
      .geoNaturalEarth1()
      .scale(width / 2 / Math.PI)
      .translate([width / 2, height / 2]);
  
    var path = d3.geoPath().projection(projection);

    d3.json(
      "/map.json"
    ).then((data) => {
      g.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", k => {
          return `countries ${k.properties.bel ? "belastingland" : ""}`
        })
        .append("title")
        .text(
          (k) =>
            "Country: " +
            k.properties.name +
            "\n" +
            "Belasting: " +
            (k.properties.bel) +
            "%",
          )
          .append("text")
          .attr("class", "country-text")
        });

    // ! For removing elements when resizing window
    var numberOfGElements = document.getElementsByTagName("g").length;
    if (numberOfGElements > 1) {
      d3.select("#worldMap > g:first-child").remove();
    }
    window.removeEventListener("resize", setWindowSize, true);
  }
  setWindowSize();
  window.addEventListener("resize", setWindowSize);