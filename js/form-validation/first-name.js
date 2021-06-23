function checkFirstNameLength(){
    firstNameFormData
        .setAttribute(["data-error-visible"], true) ;
    firstNameFormData
        .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
    firstNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function checkIfNumberInFirstName(){
    firstNameFormData
        .setAttribute(["data-error-visible"], true) ;
    firstNameFormData
        .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
    firstNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function firstNameIsValid(){
    firstNameFormData
        .removeAttribute(["data-error-visible"]) ;
    firstNameFormData
        .removeAttribute(["data-error"])         ;
    firstNameFormData
        .setAttribute(["data-valid-visible"], true) ;
}

function checkFirstName(){

    if ( containsLettersOnly.test(firstName.value.trim()) && firstName.value.trim().length < 2){

        checkFirstNameLength() ;

    } else if ( containsNumber.test(firstName.value.trim()) || containsForbiddenCaracters.test(firstName.value.trim()) ) {

        checkIfNumberInFirstName() ;

    } else {

        firstNameIsValid() ;
        return true ;
    }
}