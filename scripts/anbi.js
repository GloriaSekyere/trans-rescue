let menuText = document.querySelector(".menu-text");
let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menu-item");
let isOpen = false;

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


let enBtn = document.querySelector(".en");
let nlBtn = document.querySelector(".nl");
let english = document.querySelector(".english-group");
let dutch = document.querySelector(".dutch-group");

enBtn.onclick = () => {
  english.style.display = "block";
  dutch.style.display = "none";
}

nlBtn.onclick = () => {
  english.style.display = "none";
  dutch.style.display = "block";
}
