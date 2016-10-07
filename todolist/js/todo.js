var main =  document.querySelector("#form-list");
var button = document.querySelector(".create");
var counter = document.querySelector("#count");
var input = document.querySelector("#add-chore");

button.addEventListener("click", addlistitem);
button.addEventListener("click", count);


function addlistitem(event) {
  event.preventDefault();
  var newLabel = document.createElement("label");
  var checkBoxDiv = document.createElement("div");
  var checkbox = document.createElement("input");
  var span = document.createElement("span");
  checkBoxDiv.setAttribute("class", "checkboxdiv");
  checkbox.type = "checkbox";
  checkbox.setAttribute("class", "checkbox");
  span.textContent = input.value
  main.appendChild(checkBoxDiv);
  newLabel.appendChild(checkbox);
  newLabel.appendChild(span);
  checkBoxDiv.appendChild(newLabel);
}

function count(event) {
  event.preventDefault();
  counter.textContent ++;
}
