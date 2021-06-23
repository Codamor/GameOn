//DOM ELEMENTS ID's
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


//CHECK INPUT FUNCTIONS
function checkFirstName(){
    let check = false ;
    if (firstName.value.trim().length < 2 ){
        document
            .getElementsByClassName("formData")[0]
            .setAttribute(["data-error-visible"], true) ;
        document
            .getElementsByClassName("formData")[0]
            .setAttribute(["data-error"], "true")         ;
        document
            .getElementsByClassName("formData")[0]
            .removeAttribute(["data-valid-visible"]) ;
    } else {
        document
            .getElementsByClassName("formData")[0]
            .removeAttribute(["data-error-visible"]) ;
        document
            .getElementsByClassName("formData")[0]
            .removeAttribute(["data-error"])         ;
        document
            .getElementsByClassName("formData")[0]
            .setAttribute(["data-valid-visible"], true) ;
    }

}

function checkLastName(){

}

function checkEmail(){

}

function checkBirthDate(){

}

function checkQuantity(){

}



//EVENTS LISTENERS
firstName.addEventListener("change", checkFirstName) ;
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
birthdate.addEventListener("change", checkBirthDate);
quantity.addEventListener("change", checkQuantity);

