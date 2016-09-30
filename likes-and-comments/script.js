var like =  document.querySelector(".like-link");
var likecount =  document.querySelector(".like-count");
var form = document.querySelector("#new-comment");
var textarea = document.querySelector("#new-comment-body");
var commentsection = document.querySelector("#comments");

like.addEventListener("click", addlike);
form.addEventListener("submit", addcomment);

function addlike(event) {
  event.preventDefault();

likecount.textContent = parseInt(likecount.textContent) + 1;
}

function addcomment(event) {
  event.preventDefault();
//Creating new comment div
var newcomment = document.createElement("div");
//Adding a class to the div
newcomment.classList.add("comment");
//Assigning content to the textarea
newcomment.textContent = textarea.value;
//Attaching the comment section to Div
commentsection.appendChild(newcomment);
}
