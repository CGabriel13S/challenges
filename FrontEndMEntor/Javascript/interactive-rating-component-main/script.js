const notas = document.querySelectorAll('.nota');

const submit = document.querySelector('.submit');
const avaliacao = document.querySelector('.avaliacao');
const mensagem = document.querySelector('.mensagem');

const notaEscolhida = document.querySelector('.notaEscolhida');

function trocaTela(index) {
    let nota = index + 1;
    notaEscolhida.innerText = nota;
    submit.addEventListener('click', () => {
        avaliacao.classList.add('remocao');
        mensagem.classList.remove('remocao');
    })
}

function escolherNota() {
    notas.forEach((nota, index) => {
        nota.addEventListener('click', () => {
            notas.forEach((nota) => {
                nota.classList.remove('ativo');
            })
            nota.classList.add('ativo');
            trocaTela(index)
        });
    });
}

escolherNota();



