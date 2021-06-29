//FUNCTION TO CHECK CONDITIONS
function checkConditions(){

    if(conditions.checked === false){

        displayErrorConditionsNotChecked() ;
        return false ;

    } else {

        conditionsIsChecked() ;
        return true ;
    }
}

//FONCTIONS TO DISPLAY MESSAGES
function displayErrorConditionsNotChecked(){
    conditionsFormData
        .setAttribute(["data-error-visible"], true) ;
    conditionsFormData
        .setAttribute(["data-error"], "Vous devez accepter les conditions.") ;
    conditionsFormData
        .removeAttribute(["data-valid-visible"]) ;
}

function conditionsIsChecked(){
    conditionsFormData
        .removeAttribute(["data-error-visible"]) ;
    conditionsFormData
        .removeAttribute(["data-error"]) ;
    conditionsFormData
        .setAttribute(["data-valid-visible"], true) ;
}
