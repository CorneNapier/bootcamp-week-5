//gathering paragraphs from html document
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');

//Creating the Event and Event Listener
//                 ( Event type,  function)
p1.addEventListener('mouseover', function run() {
    p1.style.backgroundColor = "orange"
})

p1.addEventListener('mouseleave', function run() {
    p1.style.backgroundColor = "white"
})

