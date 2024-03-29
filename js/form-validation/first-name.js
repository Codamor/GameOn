//FUNCTION TO CHECK FIRST NAME
function checkFirstName(){

    let firstNameValue = firstName.value.trim() ;
    let firstNameLength = firstName.value.trim().length ;


    if( containsLetters.test(firstNameValue) && firstNameLength > 0 && firstNameLength < 2){
        displayErrorFirstNameLength() ;
        return false ;

    } else if (containsForbiddenCharactersForNames.test(firstNameValue)) {
        displayErrorForbiddenCharactersInFirstName();
        return false;


    } else if (firstNameValue === "") {
        displayFirstNameIsMandatory();
        return false;

    } else {

        displayFirstNameIsValid();
        return true;
    }
}

//FUNCTIONS TO DISPLAY MESSAGES
function displayErrorFirstNameLength(){
    firstNameFormData
        .setAttribute(["data-error-visible"], true) ;
    firstNameFormData
        .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
    firstNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorForbiddenCharactersInFirstName(){
    firstNameFormData
        .setAttribute(["data-error-visible"], true) ;
    firstNameFormData
        .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
    firstNameFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayFirstNameIsMandatory(){
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






