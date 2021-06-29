function validate(event){

    event.preventDefault() ;

    checkFirstName() ;
    checkLastName() ;
    checkEmail();
    checkBirthDate() ;
    checkTournaments() ;
    checkConditions() ;

   if (checkFirstName() === true
        && checkLastName() === true
        && checkEmail()=== true
        && checkBirthDate()=== true
        && checkTournaments() === true
        && checkConditions() === true){

        closeModal();
        openSubmitConfirmationModal();
    }
}

