function checkBirthDate(){

    let currentYear = new Date().getFullYear() ;
    let userBirthDateYear = new Date(birthDate.value).getFullYear() ;
    let minimumUserBirthDateYear = new Date("1900-01-01").getFullYear() ;

    if (userBirthDateYear > currentYear || userBirthDateYear < minimumUserBirthDateYear ){

        birthDateFormData
            .setAttribute(["data-error-visible"], true) ;
        birthDateFormData
            .setAttribute(["data-error"], "Date de naissance non valide.") ;
        birthDateFormData
            .removeAttribute(["data-valid-visible"]) ;

    } else {

        birthDateFormData
            .removeAttribute(["data-error-visible"]) ;
        birthDateFormData
            .removeAttribute(["data-error"])         ;
        birthDateFormData
            .setAttribute(["data-valid-visible"], true) ;
    }
}