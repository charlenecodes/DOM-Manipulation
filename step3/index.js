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
  console.log(projectsArray)

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
  img.classList.add("photo-style");
  img.src = project.img; // we are now referring to the project object to get the url

  // we create a new HTML attribute with ID, but why if we can just use the assigned ID?
  img.id = project.id;
  submitted.appendChild(gridItem);
}

// add an event listener to the whole grid so you don't need to do it one by one
// that way the parent knows exactly which child is clicked
submitted.addEventListener("click", chooseItem)

function chooseItem(event) {
  // always do a console log of event to know what you are getting
  console.log(event)
  // console.log(event.target)
  
  // when a photo is clicked in the submitted grid, we are console logging which id is associated
  console.log(event.target.id)

  // need to use filter to grab the image, title and description of the item associated with the id, we know that the id is given by event.target.id
  // project is an arbitrary name that we give the one item and we access the id this way

  // use a higher order function to find the project with the same project ID; once that is found, you have to use projectsArray[i].name / .description / .img in order to display what we want

  let clickedProject = projectsArray.find((project) => {
    console.log(typeof event.target.id, typeof project.id)
    return project.id === Number(event.target.id)
  }) 
  console.log(clickedProject) // the goal is for this to be a number, which the same as event.target.id

  // this gives us the url of the clicked image, we want this to be in our featured section
  // console.log(event.target.currentSrc)
  
  

  // whatever was grabbed needs to be placed in the featured section
  let featuredImg = document.createElement("img")
  let featuredTitle = document.createElement("h1")
  let featuredDescription = document.createElement("p")

  console.log(event.target.tagName, featuredDescription, featuredTitle)

  // makes sure that it will only return something if you click the image and not the empty spaces
  if(event.target.tagName === "IMG") {
    featuredImg.src = event.target.currentSrc
    featuredImg.classList.add("featured-style")
    featuredImg.classList.add("clicked-img")
    featuredTitle.classList.add("clicked-title")
    featuredDescription.classList.add("clicked-description")
    featured.append(featuredImg)
    featuredTitle.innerText = clickedProject.name
    featured.append(featuredTitle)
    featuredDescription.innerText = clickedProject.description
    featured.append(featuredDescription)
    console.log(featuredDescription, featuredTitle)
  }

  // the problem is that it features an image, but it keeps adding it and I can get the title and description to show up, but as undefined
}