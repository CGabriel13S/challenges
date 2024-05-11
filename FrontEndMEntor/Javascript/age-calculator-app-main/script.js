let showYear = document.querySelector(".show-years")
let showMonth = document.querySelector(".show-month")
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

let diaAtual = new Date();
let mesAtual = new Date();
let anoAtual = new Date();

const button = document.querySelector(".button");

function adicionaEventos() {
    let array = []
    day.addEventListener('keyup', () => {
        if (day.value.length == 2) {
            let dia = day.value;
            array.push(dia)
        }
    });

    month.addEventListener('keyup', () => {
        if (month.value.length == 2) {
            let mes = month.value;
            array.push(mes)
        }
    });

    year.addEventListener('keyup', () => {
        if (year.value.length == 4) {
            let ano = year.value;
            array.push(ano)
        }
    });

    return array;
}
//let data = adicionaEventos();
//button.addEventListener("click", () => {

//})

let data = adicionaEventos();

button.addEventListener("click", function () {
    let dia = data[0];
    let mes = data[1];
    let ano = data[2];
    if ((mesAtual.getMonth() + 1) > mes) {
        ano++;
        showMonth.innerText = 12 - ((mesAtual.getMonth() + 1) - mes);
    } else {
        showMonth.innerText = Math.abs((mesAtual.getMonth() + 1) - mes);
    }


    showYear.innerText = anoAtual.getFullYear() - ano;
})

