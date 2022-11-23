var array = [1,2,3,4,5,6,7,8,9,10];

array.forEach(function(indice){
    if(indice % 2 == 0){
        document.body.innerText += indice + "\n"; 
    }
});