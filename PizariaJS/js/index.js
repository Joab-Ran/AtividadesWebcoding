function fazerPedido(){
    let nome = document.querySelector("input[type='text']");
    console.log('Nome:' + nome.value);

    let selecionado = document.querySelector("input[name='tamanho']:checked");
    console.log('Tamanho:' + selecionado.value);

    let selecionados = document.querySelectorAll("input[name='adicionais']:checked");
    console.log('Quantidade: ' + selecionados.length)

    if (nome.value === ""){
        alert("Digite seu nome")
    } else {
        let tamanho = selecionado.value
        let precot = 0

        if (tamanho === "Pequena"){
            precot = 25
        } else if (tamanho === "Média") {
            precot = 35
        } else if (tamanho === "Grande") {
            precot = 50
        } else {
            alert("Escolha o tamanho")
        }
        console.log(precot)

        let adicionais = selecionados.length * 5
        console.log(adicionais)

        precofinal = precot + adicionais
        let valorTotal = document.querySelector("#total h2 strong")
        console.log('Valor total: ' + precot)
        valorTotal.textContent = precofinal;
        console.log('Valor total alterado: ' + valorTotal.textContent)
    }
}