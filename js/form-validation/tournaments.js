//FUNCTION TO CHECK LOCATIONS
function checkNumberOfLocationsSelected(){

    let numberOfLocationsSelected = 0 ;

    for (let i = 0 ; i < locations.length ; i++){
        if(locations[i].checked){
            numberOfLocationsSelected ++ ;
        }
    }
    return numberOfLocationsSelected ;
}

//FUNCTION TO CHECK TOURNAMENTS NUMBER
function checkNumberOfTournaments(){
    if (numberOfTournaments.value === ""){
        return numberOfTournaments.value ;

    } else {
        return Number(numberOfTournaments.value) ;
    }

}

//FUNCTION TO CHECK TOURNAMENTS
function checkTournaments(){

    let numberOfLocationsSelected = checkNumberOfLocationsSelected() ;
    let numberOfTournaments = checkNumberOfTournaments() ;

    if (numberOfTournaments === ""){

        displayTournamentNumberIsMandatory() ;

    } else if (numberOfTournaments < 0) {

        displayErrorNumberOfTournamentsNegative();
        return false;

    } else if(containsLetters.test(numberOfTournaments)){

        displayErrorLettersInTournamentsNegative() ;

    } else if (numberOfTournaments === 0 && numberOfLocationsSelected > 0){

        displayErrorLocationsWithoutTournamentNumber() ;
        return false ;

    } else if (numberOfTournaments > 0 && numberOfLocationsSelected === 0){

        displayErrorTournamentsNumberWithoutLocations() ;
        return false ;

    } else {

        tournamentsInputIsOk() ;
        return true ;
    }
}

//FUNCTIONS TO DISPLAY MESSAGES
function displayTournamentNumberIsMandatory(){
    numberOfTournamentsFormData
        .setAttribute(["data-error-visible"], true) ;
    numberOfTournamentsFormData
        .setAttribute(["data-error"], "Ce champ est obligatoire.")         ;
    numberOfTournamentsFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorNumberOfTournamentsNegative(){
    numberOfTournamentsFormData
        .setAttribute(["data-error-visible"], true) ;
    numberOfTournamentsFormData
        .setAttribute(["data-error"], "Ce nombre n'est pas valide.") ;
    numberOfTournamentsFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorLettersInTournamentsNegative(){
    numberOfTournamentsFormData
        .setAttribute(["data-error-visible"], true) ;
    numberOfTournamentsFormData
        .setAttribute(["data-error"], "Les lettres ne sont pas autorisés sur ce champ.") ;
    numberOfTournamentsFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorLocationsWithoutTournamentNumber(){
    numberOfTournamentsFormData
        .setAttribute(["data-error-visible"], true) ;
    numberOfTournamentsFormData
        .setAttribute(["data-error"], "Veuillez indiquer le nombre de tournois.") ;
    numberOfTournamentsFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function displayErrorTournamentsNumberWithoutLocations(){
    numberOfTournamentsFormData
        .setAttribute(["data-error-visible"], true) ;
    numberOfTournamentsFormData
        .setAttribute(["data-error"], "Veuillez indiquer les villes correspondantes.") ;
    numberOfTournamentsFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function tournamentsInputIsOk(){
    numberOfTournamentsFormData
        .removeAttribute(["data-error-visible"]) ;
    numberOfTournamentsFormData
        .removeAttribute(["data-error"]) ;
    numberOfTournamentsFormData
        .setAttribute(["data-valid-visible"], true) ;
}






