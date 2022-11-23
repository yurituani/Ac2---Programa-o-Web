var btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", function(){
    var custoFabrica = parseInt(document.querySelector('input[name="custoFabrica"]').value);
    var percDistribuidor = parseInt(document.querySelector('input[name="percDistribuidor"]').value);
    var percImpostos = parseInt(document.querySelector('input[name="percImpostos"]').value);
    
    var valorfinal = custoFabrica + (custoFabrica * percDistribuidor / 100) + (custoFabrica * percImpostos / 100);

    document.querySelector('input[name="valorfinal"]').value = valorfinal;
});