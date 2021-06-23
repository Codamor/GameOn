//DOM ELEMENTS
let firstName = document.getElementById("first") ;
let lastName = document.getElementById("last") ;
let email = document.getElementById("email") ;
let birthdate = document.getElementById("birthdate") ;
let quantity = document.getElementById("quantity") ;
let location1 = document.getElementById("location1") ;
let location2 = document.getElementById("location2") ;
let location3 = document.getElementById("location3") ;
let location4 = document.getElementById("location4") ;
let location5 = document.getElementById("location5") ;
let location6 = document.getElementById("location6") ;
let checkBox1 = document.getElementById("checkbox1") ;
let checkBox2 = document.getElementById("checkbox2") ;

//EVENTS LISTENERS
firstName.addEventListener("change", checkFirstName) ;
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
birthdate.addEventListener("change", checkBirthDate);
quantity.addEventListener("change", checkQuantity);
