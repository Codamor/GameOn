//FUNCTION TO DISPLAY MESSAGES

function displayErrorInvalidBirthDate(){
    birthDateFormData
        .setAttribute(["data-error-visible"], true) ;
    birthDateFormData
        .setAttribute(["data-error"], "Date de naissance non valide.") ;
    birthDateFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorBirthDateIsMandatory(){
    birthDateFormData
        .setAttribute(["data-error-visible"], true) ;
    birthDateFormData
        .setAttribute(["data-error"], "Ce champ est obligatoire.") ;
    birthDateFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorTooYoung() {
    birthDateFormData
        .setAttribute(["data-error-visible"], true);
    birthDateFormData
        .setAttribute(["data-error"], "Les tournois sont autorisés à partir de 12 ans.");
    birthDateFormData
        .removeAttribute(["data-valid-visible"]);
}

function displayBirthDateIsValid(){
    birthDateFormData
        .removeAttribute(["data-error-visible"]) ;
    birthDateFormData
        .removeAttribute(["data-error"])         ;
    birthDateFormData
        .setAttribute(["data-valid-visible"], true) ;
}


//FUNCTION TO CHECK BIRTHDATE
function checkBirthDate(){

    let currentYear =  new Date() ;
    let userBirthDateYear = new Date(birthDate.value) ;
    let maximumUserBirthDateYear = new Date("1900-01-01")
    let minimumUserBirthDateYear = new Date().setFullYear(currentYear.getFullYear() - 12);

    if (userBirthDateYear > currentYear || userBirthDateYear < maximumUserBirthDateYear ){

        displayErrorInvalidBirthDate() ;

        return false ;

    } else if (isNaN(userBirthDateYear)) {

        displayErrorBirthDateIsMandatory() ;

        return false ;

    } else if (userBirthDateYear > minimumUserBirthDateYear){

        displayErrorTooYoung() ;


    } else {

        displayBirthDateIsValid() ;
        return true ;
        }
}



