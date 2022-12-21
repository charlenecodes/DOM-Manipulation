/* add the variables at the top of the document to make it easier to use within the functions */

let projectsArray = [];
let projectID = 1;

let empty = document.querySelector(".empty")

// our grid that contains all the projects
let submitted = document.querySelector("#submitted")

// form
let form = document.querySelector("form")
form.addEventListener("submit", handleSubmit) // when the form's submit button is clicked, the items in the function will be done
// we add the listener to the form instead of the button
// to make this work, we need to make the button type="submit"


let url = document.querySelector("#url")
let name = document.getElementById("project-name")
let description = document.getElementById("description")


// use javascript to transform the url into an image

function handleSubmit(event) {
  event.preventDefault()

  // will show you target then elements, which has the whole form
  // console.log(event)
  // only relates to the form because we only put the event listener for the form
  
  let projectName = event.target.elements[0].value;
  let imgUrl = event.target.elements[1].value;
  let projectDescription = event.target.elements[2].value;

  // always console.log to see if you are grabbing the right things (not needed in the final product)
  // console.log(projectName, imgUrl, projectDescription)

  let project = {
    id: projectID,
    name: projectName,
    img: imgUrl,
    description: projectDescription
  }

  projectID++ // with every click of the button, the project ID will increase by 1

  projectsArray.push(project)

  // not needed, but helpful to see the array if the code is functioning as we want it
  // console.log(projectsArray)

  // adds a new image to the grid
  let img = document.createElement("img");
  img.classList.add("photo-style");
  img.src = imgUrl;
  submitted.appendChild(img);

  console.log("form was submitted!");

  // resets the form fields
  form.reset();

  
  // hides the message once the button is clicked since it means that it is no longer empty
  empty.classList = "hide";
}