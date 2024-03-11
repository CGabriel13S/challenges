const faqPerguntas = document.querySelectorAll('dt');
const faqRespostas = document.querySelectorAll('dd');

faqPerguntas.forEach((pergunta, index) => {
    pergunta.addEventListener('click', () => {
        faqRespostas[index].classList.toggle('display-none');
        faqPerguntas[index].classList.toggle('after');
    });
})

