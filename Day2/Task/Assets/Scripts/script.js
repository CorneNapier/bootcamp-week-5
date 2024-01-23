let food = document.getElementById('food');
let drink = document.getElementById('drinks');
let btn = document.getElementById('btn');

btn.addEventListener("click", function run(){
    if (food.style.display == "block") {
        food.style.display = "none"
        drink.style.display = "block"
        btn.innerText = "Food Menu"
    } else {
        food.style.display = "block"
        drink.style.display = "none"
        btn.innerText = "Drink Menu"
    }
})

let links = document.querySelectorAll('nav a');

for (let link in links) {
    links[link].addEventListener(
        "mouseover",
        (event) => {
          // highlight the mouseover target
          event.target.style.color = "orange";
          event.target.style.fontFamily = "Imapact";
      
          // reset the color after a short delay
          setTimeout(() => {
            event.target.style.color = "";
            event.target.style.fontFamily = "";
          }, 500);
        },
        false,
      );
}
