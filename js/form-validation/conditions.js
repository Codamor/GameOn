function checkConditions(){

    if(conditions.checked === false){

        conditionsFormData
            .setAttribute(["data-error-visible"], true) ;
        conditionsFormData
            .setAttribute(["data-error"], "Vous devez accepter les conditions.") ;
        conditionsFormData
            .removeAttribute(["data-valid-visible"]) ;

    } else {
        conditionsFormData
            .removeAttribute(["data-error-visible"]) ;
        conditionsFormData
            .removeAttribute(["data-error"]) ;
        conditionsFormData
            .setAttribute(["data-valid-visible"], true) ;

        return true ;
    }
}