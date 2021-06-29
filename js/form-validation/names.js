//FUNCTION TO CHECK FIRST NAME
function checkName(event){

    let nameValue = event.target.value.trim() ;
    let nameLength = event.target.value.trim().length ;
    let formData ;

    switch (event.target.id){
        case "first":
            formData = document.getElementsByClassName("formData")[0] ;
            break ;
        case "last":
            formData = document.getElementsByClassName("formData")[1] ;
            break ;
    }

    if (nameValue === "") {
        displayNameIsMandatory(formData);
        return false;

    } else if (containsForbiddenCharactersForNames.test(nameValue)) {
        displayErrorForbiddenCharactersInName(formData);
        return false;

    } else if ( containsLetters.test(nameValue) && nameLength > 0 && nameLength < 2){
        displayErrorNameLength(formData) ;
        return false ;

    } else {
        displayNameIsValid(formData);
        return true;
    }
}

//FUNCTIONS TO DISPLAY MESSAGES

function displayErrorNameLength(formData){
    formData
        .setAttribute(["data-error-visible"], true) ;
    formData
        .setAttribute(["data-error"], "Il faut deux caractères au minimum pour ce champ.")         ;
    formData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorForbiddenCharactersInName(formData){
    formData
        .setAttribute(["data-error-visible"], true) ;
    formData
        .setAttribute(["data-error"], "Caractères non autorisés pour ce champ.")         ;
    formData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayNameIsMandatory(formData){
    formData
        .setAttribute(["data-error-visible"], true) ;
    formData
        .setAttribute(["data-error"], "Ce champ est obligatoire.")         ;
    formData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayNameIsValid(formData){
    formData
        .removeAttribute(["data-error-visible"]) ;
    formData
        .removeAttribute(["data-error"])         ;
    formData
        .setAttribute(["data-valid-visible"], true) ;
}



