function validate(event){

    let submitConfirmationModal = document.getElementsByClassName("submit-confirmation")[0];

    event.preventDefault() ;

    if (checkFirstName() === false
        || checkLastName() === false
        || checkEmail()=== false
        || checkBirthDate()=== false
        || checkTournaments() === false
        || checkConditions() === false){

        console.log("error") ;
    } else {

    }
}

