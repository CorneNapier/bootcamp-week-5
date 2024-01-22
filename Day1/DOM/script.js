//Navigating the DOM
console.log("Document Object Model");
//DOM = whatever you have written in the <body> element in html file
//it can be accessed using JavaScript in a TREE structure

let example = document.getElementById('example');
//most popular because it's unique to that item
console.log(example);

let containers = document.getElementsByClassName('container');
console.log(containers[1].id);

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[2].textContent);
console.log(paragraphs[0].textContent);

paragraphs[3].append(' hi there');

//query selectors allow us to use css to select items
