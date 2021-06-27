function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground") ;
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const modalSubmitConfirmation = document.getElementsByClassName("submit-confirmation")[0] ;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg
      .setAttribute(["visible"], true) ;
}

// add modal close event
closeBtn.forEach( (close) => close.addEventListener("click", closeModal)) ;

//add close modal function
function closeModal(){
  modalbg
      .setAttribute(["visible"], false) ;
}

//submit-confirmation modal
function openSubmitConfirmationModal(){
  modalSubmitConfirmation.setAttribute(["visible", true]);
}

function closeSubmitConfirmationModal(){
  modalSubmitConfirmation.setAttribute(["visible", false]);
}

