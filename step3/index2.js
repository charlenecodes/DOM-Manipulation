/* add the variables at the top of the document to make it easier to use within the functions */

let projectsArray = [];
let projectID = 1;

let empty = document.querySelector(".empty")

// where we want featured items to show up
let featured = document.querySelector("#featured")

// our grid that contains all the projects
let submitted = document.querySelector("#submitted")

// form
let form = document.querySelector("form")
form.addEventListener("submit", handleSubmit) // when the form's submit button is clicked, the items in the function will be submitted
// we add the listener to the form instead of the button
// to make this work, we need to make the button type="submit"

// use javascript to transform the url into an image

function handleSubmit(event) {
  event.preventDefault() // Stop the form from submitting (to a server)

  // will show you target then elements, which has the whole form
  // console.log(event)
  
  // we can also console log while manipulating the DOM to help us grab items that we need and where they are in the tree
  // console.log(event.target.elements)

  // here our event is relevant to the form since we added the event listener there and connected it to this function
  // therefore, by referring to it below, we can access the form elements

  let formElements = event.target.elements
  // console.log(formElements[0].value)
  // always console.log to see if you are grabbing the right things (not needed in the final product)
  // console.log(projectName, imgUrl, projectDescription) you can save it into variables, but it won't be needed to make this work since we are storing them in an object anyway

  let project = {
    id: projectID,
    name: formElements[0].value,
    // an alternative syntax is if you set a name on the HTML input you can use this to call the formElement formElements.name.value
    img: formElements[1].value,
    description: formElements[2].value
  }

  projectID++ // with every click of the button, the project ID will increase by 1

  projectsArray.push(project)

  // not needed, but helpful to see the array if the code is functioning as we want it
  // console.log(projectsArray)

  addNewImage(project)

  // hides the message once the button is clicked since it means that it is no longer empty
  empty.classList = "hide";

  // resets the form fields
  form.reset();
}

function addNewImage(project) {
  // adds a new image to the grid
  let gridItem = document.createElement("div")
  let img = document.createElement("img");
  gridItem.append(img)

  // callback function is being called here so it is not automatically triggered
  img.addEventListener("click", () => { chooseItem(project.id)})

  img.classList.add("photo-style");
  img.src = project.img; 
  submitted.appendChild(gridItem);
}



function chooseItem(clickedId) {
  let clickedProject = projectsArray.find((project) => {
    return project.id === clickedId
  }) 
   
  let featuredImg = document.createElement("img")
  let featuredTitle = document.createElement("h1")
  let featuredDescription = document.createElement("p")


  featuredImg.src = clickedProject.img
  featuredImg.classList.add("featured-style")
  featuredImg.classList.add("clicked-img")
  featuredTitle.classList.add("clicked-title")
  featuredDescription.classList.add("clicked-description")
  featured.append(featuredImg)
  featuredTitle.innerText = clickedProject.name
  featured.append(featuredTitle)
  featuredDescription.innerText = clickedProject.description
  featured.append(featuredDescription)
}