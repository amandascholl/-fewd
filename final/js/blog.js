var enter = document.querySelector(".enter");
var password = document.querySelector(".secretcode").value;

enter.addEventListener("click", enterpass);

function enterpass(event) {
  event.preventDefault();
  var password = document.querySelector(".secretcode").value;
  if (password == "sunflower"){
    alert ("Access granted!");
    window.location = "write.html"; // Redirecting to other page.
    return false;
  }
}
