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