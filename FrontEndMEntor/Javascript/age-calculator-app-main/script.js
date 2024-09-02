let showYear = document.querySelector(".show-years");
let showMonth = document.querySelector(".show-month");
let showDay = document.querySelector(".show-days");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label");

const button = document.querySelector(".button");

let diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dataAtual = new Date();

function inputUser() {
    day.addEventListener('change', () => { });
    month.addEventListener('change', () => { });
    year.addEventListener('change', () => { });
}

function error() {
    input.forEach((item) => {
        if (item.value == '') {
            item.style.borderColor = 'red';
        }
        if (item.name == "day") {
            if (item.value > diasMeses[month.value] || item.value < 1) {
                item.style.borderColor = 'red';
            }
        }
        if (item.name == "month") {
            if (item.value > 12 || item.value < 1) {
                item.style.borderColor = 'red';
            }
        }
        if (item.name == "year") {
            if (item.value > dataAtual.getFullYear()) {
                item.style.borderColor = 'red';
            }
        }
    })
}

function submit() {
    button.addEventListener('click', () => {
        isBissexto();
        error();
        let dados = calculoIdade();
        render(dados);
    })
}

function isBissexto() {
    let ano = String(year.value).split('');
    ano = Number(ano[2] + ano[3]);
    if (ano % 4 != 0) {
        diasMeses[1] += 1;
    } else {
        diasMeses[1] = 28;
    }
}

function render(dados) {
    showYear.innerText = dados.idade;
    showMonth.innerText = dados.meses;
    showDay.innerText = dados.dias;

}

function calculoIdade() {
    let idade = dataAtual.getFullYear() - Number(year.value);
    let dias = 0;
    let meses = 0;

    for (let i = Number(month.value); i != Number(month.value) - 1; i++) {
        dias += diasMeses[i];
        meses += 1;
        if (i == 11) {
            i = -1;
        }
        if (i == Number(month.value) - 2) {
            dias += (diasMeses[i + 2] - Number(day.value));
        }
    }

    if (Number(month.value) > (dataAtual.getMonth() + 1) || (Number(month.value) == (dataAtual.getMonth() + 1) && Number(day.value) > dataAtual.getDate())) {
        idade -= 1;
    };
    if (Number(day.value) == dataAtual.getDate() && Number(month.value) == (dataAtual.getMonth() + 1)) {
        dias = 0;
        meses = 0;
    };
    return {
        idade: idade,
        dias: dias,
        meses: meses,
    }
}

inputUser();
submit();






