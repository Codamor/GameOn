function validate(){


    if (checkFirstName() === false
        && checkLastName() === false
        && checkEmail()=== false
        && checkBirthDate()=== false
        && checkTournaments() === false
        && checkConditions() === false)

        console.log("error") ;


}