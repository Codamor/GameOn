//FUNCTIONS TO DISPLAY MESSAGES

function displayEmailIsMandatory(){
    emailFormData
        .setAttribute(["data-error-visible"], true) ;
    emailFormData
        .setAttribute(["data-error"], "Ce champ est obligatoire.")         ;
    emailFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorEmailNotValid(){
    emailFormData
        .setAttribute(["data-error-visible"], true) ;
    emailFormData
        .setAttribute(["data-error"], "Email non valide.") ;
    emailFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function emailIsValid(){
    emailFormData
        .removeAttribute(["data-error-visible"]) ;
    emailFormData
        .removeAttribute(["data-error"]) ;
    emailFormData
        .setAttribute(["data-valid-visible"], true) ;
}

//FUNCTION TO CHECK EMAIL
function checkEmail(){

    console.log(email.value)

    if (email.value === ""){

        displayEmailIsMandatory() ;

    } else if (inputIsEmail.test(email.value) === false){

        displayErrorEmailNotValid() ;
        return false ;

    } else {

        emailIsValid() ;
        return true ;
    }
}
