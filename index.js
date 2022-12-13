/* add the variables at the top of the document to make it easier to use within the functions */

let empty = document.querySelector("#empty")
let url = document.querySelector("#url")
let button = document.querySelector("button")
let submitted = document.querySelector("submitted")
let img = document.createElement("img");

// use javascript to transform the url into an image

function handleSubmit(event) {
  img.classList.add("photo-style");
  img.src = url.value;
  submitted.appendChild(img);
  url = "";
  console.log("form was submitted!");
  empty.classList = "hide";
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);