// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const openMenu = false;
const button = document.getElementById("menu-button")

button.addEventListener("click", () => {
  console.log("here", openMenu)
  openMenu = !openMenu
}) 
