//FUNCTION TO DISPLAY MESSAGES

function displayErrorInvalidBirthDate(){
    birthDateFormData
        .setAttribute(["data-error-visible"], true) ;
    birthDateFormData
        .setAttribute(["data-error"], "Date de naissance non valide.") ;
    birthDateFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorBirthDateIsNan(){
    birthDateFormData
        .setAttribute(["data-error-visible"], true) ;
    birthDateFormData
        .setAttribute(["data-error"], "Ce champ est obligatoire.") ;
    birthDateFormData
        .removeAttribute(["data-valid-visible"]) ;
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

    let currentYear = new Date().getFullYear() ;
    let userBirthDateYear = new Date(birthDate.value).getFullYear() ;
    let minimumUserBirthDateYear = new Date("1900-01-01").getFullYear() ;

    if (userBirthDateYear > currentYear || userBirthDateYear < minimumUserBirthDateYear ){

        displayErrorInvalidBirthDate() ;
        return false ;

    } else if (isNaN(userBirthDateYear)) {

        displayErrorBirthDateIsNan() ;
        return false ;

    } else {

        displayBirthDateIsValid() ;
        return true ;
        }
}
