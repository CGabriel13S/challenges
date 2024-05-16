let showYear = document.querySelector(".show-years");
let showMonth = document.querySelector(".show-month");
let showDay = document.querySelector(".show-days");;
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const button = document.querySelector(".button");

let diasMeses = [30, 28, 30, 31, 30, 31, 30, 30, 31, 30, 31, 30];

function pegarDados() {
    day, month, year.addEventListener('change', () => {})
};

function validaData() {
    if (day.value == '' || diasMeses[month.value - 1] < day.value) { 
        day.style.borderColor = "red";
    } else {
        day.style.borderColor = "black";
    }
}

function buttonSubmit() {
    button.addEventListener("click", function () {
        validaData();
        let dados = calculoIdade(day.value, month.value, year.value);
        renderizacao(dados);
    })
}

function calculoIdade(day, month, year) {
    const dataAtual = new Date();
    let dias = dataAtual.getDate() - day;
    let meses = (dataAtual.getMonth() + 1) - month;
    let anos = dataAtual.getFullYear() - year;

    if (meses < 0 || meses === 0) {
        anos--;
        meses += 12;
    }

    if (dias < 0 || dias === 0) {
        meses--
        dias += diasMeses[meses - 1]
    }

    return {
        anos: anos,
        meses: meses,
        dias: dias,
    }

}

function renderizacao(dados) {
        showYear.innerText = dados.anos;
        showMonth.innerText = dados.meses;
        showDay.innerText = dados.dias;
}

pegarDados();
buttonSubmit();


