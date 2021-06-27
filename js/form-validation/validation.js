function validate(event){

    let submitConfirmationModal = document.getElementsByClassName("submit-confirmation")[0];

    event.preventDefault() ;

    console.log(event.target)

    if (checkFirstName() === false
        || checkLastName() === false
        || checkEmail()=== false
        || checkBirthDate()=== false
        || checkTournaments() === false
        || checkConditions() === false){

        console.log("error") ;
    } else {

        closeModal();
        openSubmitConfirmationModal();


    }
}

