// Tecnicamente eu não precisaria fazer o IF já que como o fundo já é branco,
// qualquer valor digitado no prompt que não seja entendido como um hexadecimal ou uma cor em inglês,
// resultaria no fundo continuar branco. Eu testei.

let corzinha = prompt("Digas patrão, qual a cor do fundo: Vermelho, Verde ou Azul em Hexadecimal ou Inglês")
let body = document.querySelector(".body")

function cor(color) {
    if (color == "red" || color =="green" || color =="blue" || color == "#ff0000" || color == "#00ff00" || color == "#0000ff"){
        body.style.backgroundColor = color;
    } else {
        alert("Cor inválida")
        body.style.backgroundColor = white;
    }
    
}

cor(corzinha)
