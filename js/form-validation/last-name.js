//FUNCTIONS TO DISPLAY MESSAGES

function displayErrorLastNameLength(){
    lastNameFormData
        .setAttribute(["data-error-visible"], true) ;
    lastNameFormData
        .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
    lastNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorForbiddenCharactersInNames(){
    lastNameFormData
        .setAttribute(["data-error-visible"], true) ;
    lastNameFormData
        .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
    lastNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayLastNameFieldIsEmpty(){
    lastNameFormData
        .setAttribute(["data-error-visible"], true) ;
    lastNameFormData
        .setAttribute(["data-error"], "Ce champ est obligatoire.")         ;
    lastNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}


function displayLastNameIsValid(){
    lastNameFormData
        .removeAttribute(["data-error-visible"]) ;
    lastNameFormData
        .removeAttribute(["data-error"])         ;
    lastNameFormData
        .setAttribute(["data-valid-visible"], true) ;
}

//FUNCTION TO CHECK LAST NAME

function checkLastName(){

    let lastNameValue = lastName.value.trim() ;
    let lastNameLength = lastName.value.trim().length ;


    if( containsLettersOnly.test(lastNameValue) && lastNameLength > 0 && lastNameLength < 2){
        displayErrorLastNameLength() ;
        return false ;

    } else if (containsForbiddenCharactersForNames.test(lastNameValue)) {
        displayErrorForbiddenCharactersInNames();
        return false;


    } else if (lastNameValue === "") {
        displayLastNameFieldIsEmpty();
        return false;

    } else {

        displayLastNameIsValid();
        return true;
    }
}



