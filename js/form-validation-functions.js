//CHECK FIRST NAME
function checkFirstName(){

    if ( containsLettersOnly.test(firstName.value.trim()) && firstName.value.trim().length < 2){
        document
            .getElementsByClassName("formData")[0]
            .setAttribute(["data-error-visible"], true) ;
        document
            .getElementsByClassName("formData")[0]
            .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
        document
            .getElementsByClassName("formData")[0]
            .removeAttribute(["data-valid-visible"]) ;

    } else if ( containsNumber.test(firstName.value.trim()) || containsForbiddenCaracters.test(firstName.value.trim()) ) {
        document
            .getElementsByClassName("formData")[0]
            .setAttribute(["data-error-visible"], true) ;
        document
            .getElementsByClassName("formData")[0]
            .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
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

//CHECK LAST NAME FUNCTION
function checkLastName(){

    if ( containsLettersOnly.test(lastName.value.trim()) && lastName.value.trim().length < 2){
        document
            .getElementsByClassName("formData")[1]
            .setAttribute(["data-error-visible"], true) ;
        document
            .getElementsByClassName("formData")[1]
            .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
        document
            .getElementsByClassName("formData")[1]
            .removeAttribute(["data-valid-visible"]) ;

    } else if ( containsNumber.test(lastName.value.trim()) || containsForbiddenCaracters.test(lastName.value.trim()) ) {
        document
            .getElementsByClassName("formData")[1]
            .setAttribute(["data-error-visible"], true) ;
        document
            .getElementsByClassName("formData")[1]
            .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
        document
            .getElementsByClassName("formData")[1]
            .removeAttribute(["data-valid-visible"]) ;

    } else {
        document
            .getElementsByClassName("formData")[1]
            .removeAttribute(["data-error-visible"]) ;
        document
            .getElementsByClassName("formData")[1]
            .removeAttribute(["data-error"])         ;
        document
            .getElementsByClassName("formData")[1]
            .setAttribute(["data-valid-visible"], true) ;
    }
}

function checkEmail(){

}

function checkBirthDate(){

}

function checkQuantity(){

}