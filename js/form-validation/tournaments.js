function checkNumberOfLocationsSelected(){

    let numberOfLocationsSelected = 0 ;

    if (locations[0].checked){
        numberOfLocationsSelected += 1 ;
    }
    if (locations[1].checked){
        numberOfLocationsSelected += 1 ;
    }
    if (locations[2].checked){
        numberOfLocationsSelected += 1 ;
    }
    if (locations[3].checked){
        numberOfLocationsSelected += 1 ;
    }
    if (locations[4].checked){
        numberOfLocationsSelected += 1 ;
    }
    if (locations[5].checked){
        numberOfLocationsSelected += 1 ;
    }

    return numberOfLocationsSelected ;
}

function checkNumberOfTournaments(){

    return Number(numberOfTournaments.value) ;

}

function checkTournaments(){

    let numberOfLocationsSelected = checkNumberOfLocationsSelected() ;
    let numberOfTournaments = checkNumberOfTournaments() ;

    if (numberOfTournaments < 0){

        numberOfTournamentsFormData
            .setAttribute(["data-error-visible"], true) ;
        numberOfTournamentsFormData
            .setAttribute(["data-error"], "Ce nombre n'est pas valide") ;
        numberOfTournamentsFormData
            .removeAttribute(["data-valid-visible"]) ;

    } else if (numberOfTournaments === 0 && numberOfLocationsSelected > 0){

        numberOfTournamentsFormData
            .setAttribute(["data-error-visible"], true) ;
        numberOfTournamentsFormData
            .setAttribute(["data-error"], "Veuillez indiquer le nombre de tournois.") ;
        numberOfTournamentsFormData
            .removeAttribute(["data-valid-visible"]) ;

    } else if (numberOfTournaments > 0 && numberOfLocationsSelected === 0){

        numberOfTournamentsFormData
            .setAttribute(["data-error-visible"], true) ;
        numberOfTournamentsFormData
            .setAttribute(["data-error"], "Veuillez indiquer les villes correspondantes.") ;
        numberOfTournamentsFormData
            .removeAttribute(["data-valid-visible"]) ;

    } else if ((numberOfTournaments > 0 && numberOfLocationsSelected > 0) || (numberOfTournaments === 0 && numberOfLocationsSelected === 0)){

        numberOfTournamentsFormData
            .removeAttribute(["data-error-visible"]) ;
        numberOfTournamentsFormData
            .removeAttribute(["data-error"]) ;
        numberOfTournamentsFormData
            .setAttribute(["data-valid-visible"], true) ;
    }
}







