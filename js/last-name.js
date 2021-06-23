function checkLastNameLength(){
    lastNameFormData
        .setAttribute(["data-error-visible"], true) ;
    lastNameFormData
        .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
    lastNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function checkIfNumberInLastName(){
    lastNameFormData
        .setAttribute(["data-error-visible"], true) ;
    lastNameFormData
        .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
    lastNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function lastNameIsValid(){
    lastNameFormData
        .removeAttribute(["data-error-visible"]) ;
    lastNameFormData
        .removeAttribute(["data-error"])         ;
    lastNameFormData
        .setAttribute(["data-valid-visible"], true) ;
}

function checkLastName(){

    if ( containsLettersOnly.test(lastName.value.trim()) && lastName.value.trim().length < 2){

        checkLastNameLength() ;

    } else if ( containsNumber.test(lastName.value.trim()) || containsForbiddenCaracters.test(lastName.value.trim()) ) {

        checkIfNumberInLastName() ;

    } else {

        lastNameIsValid() ;
        return true ;
    }
}