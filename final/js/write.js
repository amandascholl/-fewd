var main = document.querySelector("main");
var submit = document.querySelector(".submit");
var subject = document.querySelector("#subject-box");
var date = document.querySelector("#date-box");
var entry = document.querySelector("#entry-box");

submit.addEventListener("click", creatediv);

function creatediv(event) {
event.preventDefault();
var a = document.createElement("div");
var b = document.createElement("div");
var c = document.createElement("div");
var d = document.createElement("div");
a.setAttribute("class", "wholepost");
b.setAttribute("class", "subjectline")
c.setAttribute("class", "dateline");
d.setAttribute("class", "bodysection");
b.textContent = subject.value;
c.textContent = date.value;
d.textContent = entry.value;
main.appendChild(a);
a.appendChild(b);
a.appendChild(c);
a.appendChild(d);

}
