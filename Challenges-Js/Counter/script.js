const numero = document.querySelector(".numero");
const botoes = document.querySelectorAll("button");

function mudarNumero(){
    botoes.forEach((botao) => {
        botao.addEventListener('click', function() {
            if (botao.innerText === "decrease") {
                let numeroConvertido = Number(numero.innerText);
                numeroConvertido--
                numero.innerText = String(numeroConvertido);
            } else if (botao.innerText === "reset") {
                numero.innerText = "0";
            } else if (botao.innerText === "increase") {
                let numeroConvertido = Number(numero.innerText);
                numeroConvertido++
                numero.innerText = String(numeroConvertido);
            }
        });
    })
}

mudarNumero()
