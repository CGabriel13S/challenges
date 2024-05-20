let showYear = document.querySelector(".show-years");
let showMonth = document.querySelector(".show-month");
let showDay = document.querySelector(".show-days");;
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label");

const button = document.querySelector(".button");

let diasMeses = [30, 28, 30, 31, 30, 31, 30, 30, 31, 30, 31, 30];

function pegarDados() {
    day, month, year.addEventListener('change', () => {}) 
};

function renderError() {
    input.forEach((item) => {
        if (item.value == '') {
            item.style.borderColor = 'red';
            label.forEach((label) => {
                if (label.getAttribute("for") == item.getAttribute("id")) {
                    label.style.color = 'red';
                }
            });
        } else if ((item.getAttribute("id") == "day" || item.getAttribute("id") == "month") && (item.value.length != 2)) {
            item.style.borderColor = 'red';
            label.forEach((label) => {
                if (label.getAttribute("for") == item.getAttribute("id")) {
                    label.style.color = 'red';
                }
            });
        } else if (item.getAttribute("id") == "year" && (item.value.length != 4)) {
            item.style.borderColor = 'red';
            label.forEach((label) => {
                if (label.getAttribute("for") == item.getAttribute("id")) {
                    label.style.color = 'red';
                }
            });
        } else {
            item.style.borderColor = 'black';
            label.forEach((label) => {
                if (label.getAttribute("for") == item.getAttribute("id")) {
                    label.style.color = 'black';
                }
            });
        }
    });
}

function validaData() {
    renderError();
    
    if (input[0].value.length == 2 && input[1].value.length == 2 && input[2].value.length == 4) { return true };
}

function buttonSubmit() {
    button.addEventListener("click", function () {
        if (validaData()) {
            let dados = calculoIdade(day.value, month.value, year.value);
            renderizacao(dados);
        }
    })
}

function calculoIdade(day, month, year) {
    const dataAtual = new Date();
    let dias = (dataAtual.getDate()) - day;
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


