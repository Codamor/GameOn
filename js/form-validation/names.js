
//FUNCTION TO CHECK FIRST NAME
function checkName(event){

    let nameValue = event.target.value.trim() ;
    let nameLength = event.target.value.trim().length ;

    if( containsLetters.test(nameValue) && nameLength > 0 && nameLength < 2){
        displayErrorNameLength() ;
        return false ;

    } else if (containsForbiddenCharactersForNames.test(nameValue)) {
        displayErrorForbiddenCharactersInName();
        return false;


    } else if (nameValue === "") {
        displayNameIsMandatory();
        return false;

    } else {

        displayNameIsValid();
        return true;
    }
}

//FUNCTIONS TO DISPLAY MESSAGES

function displayErrorNameLength(event){
    formData
        .setAttribute(["data-error-visible"], true) ;
    formData
        .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
    formData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorForbiddenCharactersInName(){
    formData
        .setAttribute(["data-error-visible"], true) ;
    formData
        .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
    formData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayNameIsMandatory(){
    formData
        .setAttribute(["data-error-visible"], true) ;
    formData
        .setAttribute(["data-error"], "Ce champ est obligatoire.")         ;
    formData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayNameIsValid(){
    formData
        .removeAttribute(["data-error-visible"]) ;
    formData
        .removeAttribute(["data-error"])         ;
    formData
        .setAttribute(["data-valid-visible"], true) ;
}



