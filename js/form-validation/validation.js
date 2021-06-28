function validate(event){

    checkFirstName()
    checkLastName()

    let submitConfirmationModal = document.getElementsByClassName("submit-confirmation")[0];

    event.preventDefault() ;

   if (checkFirstName() === false
        || checkLastName() === false
        || checkEmail()=== false
        || checkBirthDate()=== false
        || checkTournaments() === false
        || checkConditions() === false){

       checkFirstName() ;
       checkLastName() ;
       checkEmail();
       checkBirthDate() ;
       checkTournaments() ;
       checkConditions() ;

    } else {

        closeModal();
        openSubmitConfirmationModal();


    }
}

