let showYear = document.querySelector(".show-years");
let showMonth = document.querySelector(".show-month");
let showDay = document.querySelector(".show-days");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const input = document.querySelectorAll("input");
const button = document.querySelector("button");
let diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dataAtual = new Date();

function inputUser() {
    day.addEventListener('change', () => { });
    month.addEventListener('change', () => { });
    year.addEventListener('change', () => { });
    submit();
}

function error() {
    let vazioCheck = true;
    let dayCheck = true;
    let monthCheck = true;
    let yearCheck = true;
    input.forEach((item) => {
        if (item.value == '') {
            item.style.borderColor = 'red';
            vazioCheck = false;
        } else {
            item.style.borderColor = 'black';
            vazioCheck = true;
        }
        if (item.name == "day") {
            if (item.value > diasMeses[month.value - 1] || item.value > 31 || item.value < 1 || item.value.length > 2) {
                item.style.borderColor = 'red';
                dayCheck = false;
            } else {
                item.style.borderColor = 'black';
                dayCheck = true;
            }
        }
        if (item.name == "month") {
            if (item.value > 12 || item.value < 1 || item.value.length > 2) {
                item.style.borderColor = 'red';
                monthCheck = false;
            } else {
                item.style.borderColor = 'black';
                monthCheck = true
            }
        }
        if (item.name == "year") {
            if (item.value > dataAtual.getFullYear() || item.value.length > 4 || item.value.length < 4) {
                item.style.borderColor = 'red';
                yearCheck = false
            } else {
                item.style.borderColor = 'black';
                yearCheck = true;
            }
        }
    })
    return (vazioCheck && dayCheck && monthCheck && yearCheck); 
}

function submit() {
    button.addEventListener('click', () => {
        isBissexto();
        let erro = error();
        if (erro === true) {
            let dados = calculoIdade();
            render(dados);
        }
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
    if (Number(month.value) > (dataAtual.getMonth() + 1) || (Number(month.value) == (dataAtual.getMonth() + 1) && Number(day.value) > dataAtual.getDate())) {
        meses = 11 - ((Number(month.value)) - (dataAtual.getMonth() + 1));
        dias = diasMeses[Number(month.value - 1)] - (Number(day.value) - (dataAtual.getDate()));
        if (dias > diasMeses[Number(month.value) - 1]) {
            dias = dias - diasMeses[Number(month.value) - 1];
            meses += 1;
        }
        return {
            idade: idade -= 1,
            meses: meses,
            dias: dias,
        }
    };
    if (Number(day.value) == dataAtual.getDate() && Number(month.value) == (dataAtual.getMonth() + 1)) {
        dias = 0;
        meses = 0;
        return {
            idade: idade,
            dias: dias,
            meses: meses,
        }
    };
    if (Number(month.value) == (dataAtual.getMonth() + 1) && Number(day.value) < dataAtual.getDate()) {
        dias = dataAtual.getDate() - Number(day.value);
        return {
            idade: idade,
            dias: dias,
            meses: meses,
        }
    }
    if (Number(month.value) < (dataAtual.getMonth() + 1)) {
        for (let i = Number(month.value); i != (dataAtual.getMonth() + 1); i++) {
            dias += diasMeses[i];
            meses += 1;
            if (i == 11) {
                i = -1;
            }
            if (i == Number(month.value) - 2) {
                dias += (diasMeses[i + 2] - Number(day.value));
            }
        }

        if (Number(day.value) < dataAtual.getDate()) {
            dias = dataAtual.getDate() - Number(day.value);
        } else if (Number(day.value) == dataAtual.getDate()) {
            dias = 0;
        } else {
            meses -= 1;
            dias = diasMeses[dataAtual.getMonth() - 1] - Number(day.value)
        }

        return {
            idade: idade,
            dias: dias,
            meses: meses,
        }
    }
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
    return {
        idade: idade,
        dias: diasMeses[month.value - 1] - (diasAno - dias),
        meses: meses,
    }
}

inputUser();







