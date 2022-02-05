let menuText = document.querySelector(".menu-text");
let menu = document.querySelector(".menu");
let isOpen = false;

let menuItems = document.querySelectorAll(".menu-item");


menuText.onclick = () => {
  isOpen = (isOpen == false) ? true : false;

  if (isOpen == false) {
    menuText.style.backgroundColor= "rgba(0,0,0,0.8)";
    menu.style.display = "block";
    
  } else {
    menuText.style.backgroundColor= "rgba(0,0,0,0.5)";
    menu.style.display = "none";
  }
}

menuItems.forEach(item => {
  item.onclick = () => {
    menuText.style.backgroundColor= "rgba(0,0,0,0.5)";
    menu.style.display = "none";
  }
});



window.onclick = (event) => {
  if (event.target == document.body) {
    menu.style.display = "none";
  }
}