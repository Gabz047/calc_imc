function calcular() {
    const peso = document.getElementById('pesodigita').value;
    const altura = document.getElementById('alturadigita').value;
    altura.replace(".", ",");

    const imc = (peso / (altura * altura)).toFixed(2);
    let desc = ``;

    if (altura == "") {
        alert("Informe o valor da ALTURA!");
    }
    else if (peso == "") {
        alert("Informe o valor do PESO!");
    }
    else {

    
    if (imc < 18.5) {
        desc = desc + `Você está abaixo do peso`
    } else if (imc <= 24.9) {
        desc = desc + `Peso Normal`
    } else if (imc <= 29.9) {
        desc = desc + `Sobrepeso`
    } else if (imc <= 34.9) {
        desc = desc + `Obesidade Grau I`
    } else if (imc <= 39.9) {
        desc = desc + `Obesidade Grau II`
    } else {
        desc = desc + `Obesidade Mórbida`
    }

    document.getElementById("imc").value = imc
    document.getElementById("classi-show").value = desc
}
}

function limpar() {
    document.getElementById("imc").value = "";
    document.getElementById("classi-show").value = "";
    document.getElementById('pesodigita').value = "";
    document.getElementById('alturadigita').value = "";
}