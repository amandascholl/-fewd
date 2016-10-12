var a = document.querySelector(".fsog");
var b = document.querySelector(".single");
var c = document.querySelector(".dumb");
var d = document.querySelector(".jurassic");
var e = document.querySelector(".lionking");
var f = document.querySelector(".titanic");
var g = document.querySelector("#title");
var h = document.querySelector("#year");
var i = document.querySelector("#rating");
var j = document.querySelector("#runtime");
var k = document.querySelector("#plot");

a.addEventListener("click", getFifty);
b.addEventListener("click", getSingle);
c.addEventListener("click", getDumb);
d.addEventListener("click", getJurassic);
e.addEventListener("click", getLion);
f.addEventListener("click", getTitanic);


function displayResults(results) {
g.textContent = results.Title;
h.textContent = results.Year;
i.textContent = results.Rated;
j.textContent = results.Runtime;
k.textContent = results.Plot;
}

function getFifty(event) {
  $.get("http://www.omdbapi.com/?i=tt2322441", displayResults);
}

function getSingle(event) {
  $.get("http://www.omdbapi.com/?i=tt1292566", displayResults);
}

function getDumb(event) {
  $.get("http://www.omdbapi.com/?i=tt0109686", displayResults);
}

function getJurassic(event) {
  $.get("http://www.omdbapi.com/?i=tt0107290", displayResults);
}

function getLion(event) {
  $.get("http://www.omdbapi.com/?i=tt0110357", displayResults);
}

function getTitanic(event) {
  $.get("http://www.omdbapi.com/?i=tt0120338", displayResults);
}
