const nav = document.querySelectorAll("a");
const all = document.querySelectorAll(".produto")
const breakfast = document.querySelectorAll(".breakfast");
const lunch = document.querySelectorAll(".lunch");
const shakes = document.querySelectorAll(".shakes");
const dinner = document.querySelectorAll(".dinner");

function exclui() {
    all.forEach((item) => {
        item.classList.add("none");
    })
}

function showAll() {
    all.forEach((item) => {
        item.classList.remove("none");
    })
}

function showBreakfast() {
    exclui()
    breakfast.forEach((item) => {
        item.classList.remove("none");
    })
}

function showLunch() {
    exclui()
    lunch.forEach((item) => {
        item.classList.remove("none");
    })
}

function showShakes() {
    exclui()
    shakes.forEach((item) => {
        item.classList.remove("none");
    })
}

function showDinner() {
    exclui()
    dinner.forEach((item) => {
        item.classList.remove("none");
    })
}

nav.forEach((botao) => {
    botao.addEventListener("click", function() {
        if (botao.innerText === "All") {
            showAll()
        } else if (botao.innerText === "Breakfast") {
            showBreakfast()
        } else if (botao.innerText === "Lunch") {
            showLunch()
        } else if (botao.innerText === "Shakes") {
            showShakes()
        } else if (botao.innerText === "Dinner") {
            showDinner()
        }
    })
})

