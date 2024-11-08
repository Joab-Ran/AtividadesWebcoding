
const desconto = 0.1;

let mousepad = {
    nome: "MousePad God of War",
    valor: 80,
    codigo: "325365",
}

let teclado = {
    nome: "Teclado Mecânico",
    valor: 500,
    codigo: "325675",
}

function compraParcelada(prod, numparc) {
    const juros = 0.02;
    if (numparc == 0 || numparc == 1) { // 1 parcela também seria à vista?
        let valorDesconto = prod.valor * desconto;
        let valorDescontado = prod.valor - valorDesconto;
        console.log("Compra à vista")
        console.log(prod.nome,"Valor do Desconto: ", valorDesconto)
        console.log(prod.nome,"Valor Descontado: ", valorDescontado)
    } else {
        if (numparc <= 12 && numparc >= 1){
            if (numparc >= 11) {
                let valorJuros = prod.valor * juros;
                let valorParcelado = (prod.valor + valorJuros) / numparc;
                console.log(prod.nome,"Valor das Parcelas com juros: ", valorParcelado)
            } else {
                let valorParcelado = prod.valor / numparc;
                console.log(prod.nome,"Valor das Parcelas: ",valorParcelado)
            }
        } else {
            console.log("Número de parcelas inválido, só trabalhamos com 12x")
        }
    }
}

compraParcelada(mousepad, 13)
compraParcelada(teclado, -2)
compraParcelada(mousepad, 12)
compraParcelada(teclado, 5)
compraParcelada(mousepad, 0)