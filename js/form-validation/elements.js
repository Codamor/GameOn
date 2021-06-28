//DOM ELEMENTS ID's
let firstName = document.getElementById("first") ;
let lastName = document.getElementById("last") ;
let email = document.getElementById("email") ;
let birthDate = document.getElementById("birthdate") ;
let numberOfTournaments = document.getElementById("quantity") ;
let locations = document.getElementsByName("location") ;
let conditions = document.getElementById("checkbox1") ;
let formSubmit = document.getElementsByClassName("btn-submit")[0] ;


//FORM DATA CLASS EASY SELECTION
let firstNameFormData = document.getElementsByClassName("formData")[0] ;
let lastNameFormData = document.getElementsByClassName("formData")[1] ;
let emailFormData = document.getElementsByClassName("formData")[2] ;
let birthDateFormData = document.getElementsByClassName("formData")[3] ;
let numberOfTournamentsFormData = document.getElementsByClassName("formData")[4] ;
let conditionsFormData = document.getElementsByClassName("formData")[5] ;

//REGEX
let containsLetters = /^[a-z]+$/i ;
let containsNumber = /[0-9]/ ;
let containsForbiddenCharactersForNames = /[!"#$%&'()*+,./:;<=>?@^_`{|}~0-9]/
let containsForbiddenCharactersForEmail = /[!"#$%&'()*+,./:;<=>?@^_`{|}~]/
let inputIsEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i ;


//EVENTS LISTENERS
firstName.addEventListener("focusout", checkFirstName) ;
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
birthDate.addEventListener("change", checkBirthDate);
numberOfTournaments.addEventListener("change", checkTournaments);
conditions.addEventListener("change", checkConditions) ;
formSubmit.addEventListener("click", validate) ;


for(let i = 0 ; i < locations.length ; i ++){
    locations[i].addEventListener("change", checkTournaments) ;
}

