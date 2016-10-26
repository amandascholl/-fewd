var main = document.querySelector("main");
var submit = document.querySelector(".submit");
var subject = document.querySelector(".subject").textcontent;
var date = document.querySelector(".date").textcontent;
var entry = document.querySelector(".entry").textcontent;



submit.addEventListener("click", addpost);

function addpost("event") {
  event.preventDefault()
  var a = document.createElement("div");
  a.setAttribute("class", "wholepost");
  main.appendChild(a);

  var b = document.createElement("div");
  b.setAttribute("class", "subjectline");
  a.appendChild(b);

  var c = document.createElement("div");
  c.setAttribute("class", "dateline");
  a.appendChild(c);
  
  var d = document.createElement("div");
  d.setAttribute("class", "bodysection");
}
