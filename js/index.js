// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const menuButton = document.getElementById("menu-button")
const closeButton = document.getElementById("close-button")
const navLinksContainer = document.getElementById("nav-links-container")
const buttonContainer = document.getElementById("button-container")

menuButton.addEventListener("click", () => {
  console.log("what happened?")
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
