// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const menuButton = document.getElementById("menu-button")
const closeButton = document.getElementById("close-button")
const navLinksContainer = document.getElementById("nav-links-container")
const buttonContainer = document.getElementById("button-container")

let previousWidth = window.innerWidth;

if (window.innerWidth >= 1280) {
  navLinksContainer.classList.remove("hidden")
  buttonContainer.classList.remove("hidden")
  closeButton.classList.remove("hidden")
  menuButton.classList.add("hidden")
}
else {
  navLinksContainer.classList.add("hidden")
  buttonContainer.classList.add("hidden")
  closeButton.classList.add("hidden")
  menuButton.classList.remove("hidden")
}

window.addEventListener("resize", () => {
  const currentWidth = window.innerWidth;
  if (currentWidth >= 1280) {
    navLinksContainer.classList.remove("hidden")
    buttonContainer.classList.remove("hidden")
    closeButton.classList.add("hidden")
    menuButton.classList.add("hidden")
  } else {
    if(previousWidth - currentWidth === 1)
    closeButton.classList.remove("hidden")
  }
  previousWidth = currentWidth
})

menuButton.addEventListener("click", () => {
  navLinksContainer.classList.remove("hidden")
  buttonContainer.classList.remove("hidden")
  closeButton.classList.remove("hidden")
  menuButton.classList.add("hidden")
}) 

closeButton.addEventListener("click", () => {
  navLinksContainer.classList.add("hidden")
  buttonContainer.classList.add("hidden")
  closeButton.classList.add("hidden")
  menuButton.classList.remove("hidden")
})


