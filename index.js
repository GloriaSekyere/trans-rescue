{
let titleOne = document.getElementById("title-one");
let titleTwo = document.getElementById("title-two");
let titleThree = document.getElementById("title-three");

let who_we_are = document.getElementById("who-we-are");
let what_we_do = document.getElementById("what-we-do");
let what_we_dont = document.getElementById("what-we-dont");
    
let indicatorOne = document.getElementById("indicator-one");
let indicatorTwo = document.getElementById("indicator-two");
let indicatorThree = document.getElementById("indicator-three");

titleOne.onclick = function() {
          
      titleOne.style.fontWeight = 700;
      titleTwo.style.fontWeight = 400;
      titleThree.style.fontWeight = 400;

      who_we_are.style.display = "block";
      what_we_do.style.display = "none";
      what_we_dont.style.display = "none";

      indicatorOne.style.visibility = "visible";
      indicatorTwo.style.visibility = "hidden";
      indicatorThree.style.visibility = "hidden";
}
      
titleTwo.onclick = function() {
          
      titleOne.style.fontWeight = 400;
      titleTwo.style.fontWeight = 700;
      titleThree.style.fontWeight = 400;

      who_we_are.style.display = "none";
      what_we_do.style.display = "block";
      what_we_dont.style.display = "none";

      indicatorOne.style.visibility = "hidden";
      document.getElementById("indicator-two").style.visibility = "visible";
      document.getElementById("indicator-three").style.visibility = "hidden";
}
      
titleThree.onclick = function() {

      titleOne.style.fontWeight = 400;
      titleTwo.style.fontWeight = 400;
      titleThree.style.fontWeight = 700;

      who_we_are.style.display = "none";
      what_we_do.style.display = "none";
      what_we_dont.style.display = "block";

      indicatorOne.style.visibility = "hidden";
      indicatorTwo.style.visibility = "hidden";
      indicatorThree.style.visibility = "visible";
}
}
      
{
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let contact = document.getElementById("contact");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
contact.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}