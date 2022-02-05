// Declare variables for About Us section
let titleOne = document.getElementById("title-one");
let titleTwo = document.getElementById("title-two");
let titleThree = document.getElementById("title-three");

let who_we_are = document.getElementById("who-we-are");
let what_we_do = document.getElementById("what-we-do");
let what_we_dont = document.getElementById("what-we-dont");
    
let indOne = document.getElementById("ind-1");
let indTwo = document.getElementById("ind-2");
let indThree = document.getElementById("ind-3");

// Instructions for Who We Are
titleOne.onclick = () => {  
  // Title   
  titleOne.style.fontWeight = 700;
  titleTwo.style.fontWeight = 400;
  titleThree.style.fontWeight = 400;
  // Body
  who_we_are.style.display = "block";
  what_we_do.style.display = "none";
  what_we_dont.style.display = "none";
  // Indicator
  indOne.style.visibility = "visible";
  indTwo.style.visibility = "hidden";
  indThree.style.visibility = "hidden";
}

// Instructions for What We Do
titleTwo.onclick = () => {
  // Title          
  titleOne.style.fontWeight = 400;
  titleTwo.style.fontWeight = 700;
  titleThree.style.fontWeight = 400;
  // Body
  who_we_are.style.display = "none";
  what_we_do.style.display = "block";
  what_we_dont.style.display = "none";
  // Indicator
  indOne.style.visibility = "hidden";
  indTwo.style.visibility = "visible";
  indThree.style.visibility = "hidden";
}

// Instructions for What We Don't Do
titleThree.onclick = () => {
  // Title   
  titleOne.style.fontWeight = 400;
  titleTwo.style.fontWeight = 400;
  titleThree.style.fontWeight = 700;
  // Body
  who_we_are.style.display = "none";
  what_we_do.style.display = "none";
  what_we_dont.style.display = "block";
  // Indicator
  indOne.style.visibility = "hidden";
  indTwo.style.visibility = "hidden";
  indThree.style.visibility = "visible";
}


// Declare variables for Contact Us section    
let modal = document.querySelector(".modal-backdrop");
let contact = document.querySelector(".contact-text");
let closeIcon = document.querySelector(".close-icon");

// When the user clicks the Contact Us, open the modal 
contact.onclick = () => {
  modal.style.display = "block";
}

// When the user clicks on (x), close the modal
closeIcon.onclick = () => {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
