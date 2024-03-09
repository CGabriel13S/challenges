// manter a cor laranja no botão da nota escolhida

const notas = document.querySelectorAll('.nota');

notas.forEach((nota) => {
    nota.addEventListener('click', () => {
        notas.forEach((nota => {
            nota.classList.remove('ativo');
        }))
        nota.classList.add('ativo');
    });
});

// mudar a tela após o envio da nota

const submit = document.querySelector('.submit');
const avaliacao = document.querySelector('.avaliacao');
const mensagem = document.querySelector('.mensagem');

submit.addEventListener('click', () => {
    avaliacao.classList.add('remocao');
    mensagem.classList.remove('remocao');
})
