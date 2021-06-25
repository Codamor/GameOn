//FUNCTIONS TO DISPLAY MESSAGES

function displayErrorFirstNameLength(){
    firstNameFormData
        .setAttribute(["data-error-visible"], true) ;
    firstNameFormData
        .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
    firstNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorForbiddenCharactersInNames(){
    firstNameFormData
        .setAttribute(["data-error-visible"], true) ;
    firstNameFormData
        .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
    firstNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayFirstNameFieldIsEmpty(){
    firstNameFormData
        .setAttribute(["data-error-visible"], true) ;
    firstNameFormData
        .setAttribute(["data-error"], "Ce champ est obligatoire.")         ;
    firstNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}


function displayFirstNameIsValid(){
    firstNameFormData
        .removeAttribute(["data-error-visible"]) ;
    firstNameFormData
        .removeAttribute(["data-error"])         ;
    firstNameFormData
        .setAttribute(["data-valid-visible"], true) ;
}



//FUNCTION TO CHECK FIRST NAME

function checkFirstName(){

    let firstNameValue = firstName.value.trim() ;
    let firstNameLength = firstName.value.trim().length ;


    if( containsLettersOnly.test(firstNameValue) && firstNameLength > 0 && firstNameLength < 2){
        displayErrorFirstNameLength() ;
        return false ;

    } else if (containsForbiddenCharactersForNames.test(firstNameValue)) {
        displayErrorForbiddenCharactersInNames();
        return false;


    } else if (firstNameValue === "") {
        displayFirstNameFieldIsEmpty();
        return false;

    } else {

        displayFirstNameIsValid();
        return true;
    }
}



