function checkQuantity(){

    if (quantity.value < 0){
        quantityFormData
            .setAttribute(["data-error-visible"], true) ;
        quantityFormData
            .setAttribute(["data-error"], "Ce nombre n'est pas valide") ;
        quantityFormData
            .removeAttribute(["data-valid-visible"]) ;
    } else {
        quantityFormData
            .removeAttribute(["data-error-visible"]) ;
        quantityFormData
            .removeAttribute(["data-error"])         ;
        quantityFormData
            .setAttribute(["data-valid-visible"], true) ;
    }
}




function checkLocations(){

    let actualQuantity = Number(quantity.value) ;
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

    if (actualQuantity > 0 && numberOfLocationsSelected === 0){
        console.log("Sélectionnez les villes correspondantes.")
    } else if (actualQuantity === 0 && numberOfLocationsSelected > 0){
        console.log("Indiquez le nombre de tournois.")
    } else {
        console.log("ok"))
}
}