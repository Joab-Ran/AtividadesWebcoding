let corzinha = prompt("Digas patrão, qual a cor do fundo: Vermelho, Verde, Azul ou Preto em Hexadecimal ou Inglês");
let body = document.querySelector(".body");
let textu = document.querySelector("h1");

function mudarbg(color) {
    if (color == "red" || color =="green" || color =="blue" || color == "#ff0000" || color == "#00ff00" || color == "#0000ff"){
        body.style.backgroundColor = color;

    } else if (color == "black" || color == "#000000"){
        body.style.backgroundColor = color;
        textu.style.color = "white";

        } else {
        alert("Cor inválida");
        body.style.backgroundColor = white;
        }
    
}

mudarbg(corzinha)
