function validate(event){

    event.preventDefault() ;

    if (checkFirstName() === false
        || checkLastName() === false
        || checkEmail()=== false
        || checkBirthDate()=== false
        || checkTournaments() === false
        || checkConditions() === false){

        console.log("error") ;
    } else {
        closeModal() ;
    }
}