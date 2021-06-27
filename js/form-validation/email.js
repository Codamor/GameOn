//FUNCTIONS TO DISPLAY MESSAGES

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

    if (inputIsEmail.test(email.value) === false){

        displayErrorEmailNotValid() ;
        return false ;

    } else {

        emailIsValid() ;
        return true ;
    }
}
