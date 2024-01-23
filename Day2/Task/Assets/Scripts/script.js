//Task1
let food = document.getElementById('food');
let drink = document.getElementById('drinks');
let btn = document.getElementById('btn');

btn.addEventListener("click", function run() {
    if (drink.style.display == "block") {
        food.style.display = "block"
        drink.style.display = "none"
        btn.innerText = "Drink Menu"
    } else {
        food.style.display = "none"
        drink.style.display = "block"
        btn.innerText = "Food Menu"
    }
})
//Task2
let links = document.querySelectorAll('nav a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function run() {
        links[i].style.color = "orange";
        links[i].style.fontFamily = "Impact";
        links[i].style.fontSize = "x-large";

    })

    links[i].addEventListener("mouseout", function run() {
        links[i].style.color = "";
        links[i].style.fontFamily = "";
        links[i].style.fontSize = "";

    })
}
//Task3
let openings = document.getElementById('openings');

openings.addEventListener('mouseenter', function run() {
    openings.style.fontSize = "x-large";
})

openings.addEventListener('mouseleave', function run() {
    openings.style.fontSize = "";
})
//Task4
let myInput = document.getElementsByTagName('input')

for (let i = 0; i < myInput.length; i++) {
    const input = myInput[i];

    input.addEventListener('keypress', function run() {
        input.style.backgroundColor = "blue";
        input.style.color = "red";
    })

}
