/* add the variables at the top of the document to make it easier to use within the functions */

let empty = document.querySelector("#empty")
let url = document.querySelector("#url")
let button = document.querySelector("#submit")
let submitted = document.querySelector("submitted")


// use javascript to transform the url into an image

function handleSubmit(event) {
  event.preventDefault();
  let img = document.createElement("img");
  img.classList.add("photo-style");
  img.src = url.value;
  submitted.appendChild(img);
  console.log("form was submitted!");
  empty.classList = "hide";
  url.value = "";
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);