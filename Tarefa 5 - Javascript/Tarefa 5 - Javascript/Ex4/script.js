function mostrarTabuada() {    
    let resultado = document.getElementById("resultado");
    let num = document.getElementById("num").value;
    
    resultado.innerText = "";
    for (let index = 1; index <= 10; index++) {
        resultado.innerText += num + " x " + index + " = " + num * index + "\n";
    }
}