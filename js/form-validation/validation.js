function validate(){

    if (checkFirstName() === true
        && checkLastName() === true
        && checkEmail()=== true
        && checkBirthDate()=== true
        && checkTournaments() === true
        && checkConditions() === true)
    {
        console.log("ok") ;
    } else {
        console.log("error") ;
    }
}