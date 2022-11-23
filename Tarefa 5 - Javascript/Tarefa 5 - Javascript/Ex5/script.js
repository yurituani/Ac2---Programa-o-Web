function calcular() {    
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var operacao = document.querySelector('input[name="operacao"]:checked').value;
    
    resultado.innerText = "";
    switch (operacao) {
        case "soma":
            resultado.innerText += num1 + " + " + num2 + " = " + (num1 + num2);
            break;
        case "subtracao":
            resultado.innerText += num1 + " - " + num2 + " = " + (num1 - num2);
            break;
        case "multiplicacao":
            resultado.innerText += num1 + " * " + num2 + " = " + (num1 * num2);
            break;
        case "divisao":
            resultado.innerText += num1 + " / " + num2 + " = " + (num1 / num2);
            break;
    }
}