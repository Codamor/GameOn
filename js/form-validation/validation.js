function validate(event){

    event.preventDefault() ;

    checkName() ;
    checkEmail();
    checkBirthDate() ;
    checkTournaments() ;
    checkConditions() ;


   if (checkName() === true

        && checkName() === true
        && checkEmail()=== true
        && checkBirthDate()=== true
        && checkTournaments() === true
        && checkConditions() === true){


        closeModal();
        openSubmitConfirmationModal();
    }
}

