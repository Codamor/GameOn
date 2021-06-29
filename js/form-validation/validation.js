function validate(event){

    event.preventDefault() ;

    checkName() ;
    checkEmail();
    checkBirthDate() ;
    checkTournaments() ;
    checkConditions() ;

   if (    checkName()
        || checkEmail()=== true
        || checkBirthDate()=== true
        || checkTournaments() === true
        || checkConditions() === true){

        closeModal();
        openSubmitConfirmationModal();
    }
}

