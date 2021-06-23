function checkEmail(){
    if (inputIsEmail.test(email.value) === false){

        emailFormData
            .setAttribute(["data-error-visible"], true) ;
        emailFormData
            .setAttribute(["data-error"], "Email non valide.") ;
        emailFormData
            .removeAttribute(["data-valid-visible"]) ;

    } else {
        emailFormData
            .removeAttribute(["data-error-visible"]) ;
        emailFormData
            .removeAttribute(["data-error"]) ;
        emailFormData
            .setAttribute(["data-valid-visible"], true) ;
    }
}
