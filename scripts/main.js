// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/global.scss'
import '../scripts/language.js'
import '../scripts/parallax.js'
import '../scripts/verdrag.js'
import '../scripts/social.js'
import '../scripts/doorsluis.js'

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

// MAP 1
const width = 780
const height = 600

const svg = d3.select("#map")
  .style('width', "100vw")
  .style('height', "auto")
  .style('margin-top', "-6em")
  .style('margin-bottom', "-5em")

const projection = d3.geoMercator().scale(125).translate([width / 2.10, height / 1.40]);

const goodcountries = ["Italy", "China (Macau)", "India", "Vietnam", "Botswana"]
const badcountries = ["Portugal", "United Arab Emirates", "South Africa", "Mauritania"]

d3.json("../map.json").then( function(data) {

  const Tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("opacity", 0)
  .style("color", "black")
  .style("background-color", "#e7e7d9")
  .style("padding", "1em")
  .style("border", "2px #93956f solid")
  .style("font-weight", "bold")
  .style("z-index", "12")

  function mouseOver(e,d) {

    if(goodcountries.includes(d.properties.name)) {
        Tooltip.style("opacity", 1)
        d3.select(this)
        .style("fill", "#b99b04")
        d3.select(".tooltip")
        .html(`<h5>${d.properties.name}</h5><h6>Total amount of tax: ${d.properties.bel}%</h6>`)
      }
    if(badcountries.includes(d.properties.name) || negotiationscountrys.includes(d.properties.name) || d.properties.name == "Mozambique") {
        Tooltip.style("opacity", 1)
        d3.select(this)
        .style("fill", "#970613")
        d3.select(".tooltip")
        d3.select(".tooltip")
        .html(`<h5>${d.properties.name}</h5><h6>Total amount of tax: ${d.properties.bel}%</h6>`)
      }
  }

  function mouseMove (e) {
    d3.select(".tooltip")
      .style("left", e.pageX + 15 + "px")
      .style("top", e.pageY + 15 + "px")
  }

  function mouseOut (e, d) {
    if(goodcountries.includes(d.properties.name)) {
      d3.select(this)
        .style("fill", "#e4bc00")
    }
    if(badcountries.includes(d.properties.name)) {
      d3.select(this)
        .style("fill", "#e30513")
    } 
    if(d.properties.name == "Mozambique") {
      d3.select(this)
        .style("fill", "black")
    }
    d3.select(".tooltip")
      .style("opacity", 0)
  }

  svg.append("g")
    .selectAll("path")
    .data(data.features)
    .join("path")
      .attr("d", d3.geoPath()
      .projection(projection)
      )
      .attr("fill", function (d) {
        if(goodcountries.includes(d.properties.name)) {
          return "#e4bc00"
        } 
        if(badcountries.includes(d.properties.name)) {
          return "#e30513"
        }
        if(d.properties.name == "Mozambique") {
          return "black"
        }
        else {
         return "#93956f"
       }
     })
     .style("stroke", "#e7e7d9")
     .style("stroke-width", 1)
     .on("mouseover touchstart", mouseOver )
     .on("mousemove", mouseMove)
     .on("mouseout", mouseOut)
     
    d3.select('#map')
    .attr("viewBox", "0 0 " + width + " " + height )
    .attr("preserveAspectRatio", "xMinYMin");


    // Define the resize function
    d3.select(window).on("resize", resize);

    function resize() {
      // Get the current size of the parent container
      var parent = d3.select("#map").node().parentNode;
      var width = parent.clientWidth;
      var height = parent.clientHeight;

      // Update the dimensions of the SVG element
      svg.attr("width", width)
          .attr("height", height);
    }
})