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
  else{
  attempt --;// Decrementing by one.
  alert("You have left "+attempt+" attempt;");
  // Disabling fields after 3 attempts.
  if( attempt == 0){
    document.getElementById("password").disabled = true;
    return false;
    }
  }
}
