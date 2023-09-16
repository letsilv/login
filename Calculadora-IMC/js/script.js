document.getElementById("calcular").addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0 {
        const imc = peso / (altura*altura);
        constresultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu IMC é: $(imc.toFixed(2)}`;
    } else {
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "Digite um valor válido";
    }
});

    
   
    
    
    
