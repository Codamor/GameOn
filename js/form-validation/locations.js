let locationsArray = document.getElementsByName("location") ;
let actualQuantity = quantity.value ;

function locationsNumberCalc(){
    let locationsNumber = 0 ;

    for (let i = 0; i < locationsArray.length; i++){

        if(locationsArray[i].checked){
            locationsNumber += 1 ;
        }
    }

    return locationsNumber ;

}






