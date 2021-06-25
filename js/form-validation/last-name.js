//FUNCTIONS TO DISPLAY MESSAGES

function displayErrorFirstNameLength(){
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

function displayFirstNameFieldIsEmpty(){
    lastNameFormData
        .setAttribute(["data-error-visible"], true) ;
    lastNameFormData
        .setAttribute(["data-error"], "Ce champ est obligatoire.")         ;
    lastNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}


function displayFirstNameIsValid(){
    lastNameFormData
        .removeAttribute(["data-error-visible"]) ;
    lastNameFormData
        .removeAttribute(["data-error"])         ;
    lastNameFormData
        .setAttribute(["data-valid-visible"], true) ;
}



//FUNCTIONS TO CHECK FIRST NAME

function checkLastName(){

    let lastNameValue = lastName.value.trim() ;
    let lastNameLength = lastName.value.trim().length ;


    if( containsLettersOnly.test(lastNameValue) && lastNameLength > 0 && lastNameLength < 2){
        displayErrorFirstNameLength() ;
        return false ;

    } else if (containsForbiddenCharactersForNames.test(lastNameValue)) {
        displayErrorForbiddenCharactersInNames();
        return false;


    } else if (lastNameValue === "") {
        console.log(lastNameValue, typeof lastNameValue)
        displayFirstNameFieldIsEmpty();
        return false;

    } else {

        displayFirstNameIsValid();
        return true;
    }
}



