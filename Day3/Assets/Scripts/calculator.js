// Basic Calculator - 
//an example to how we can link functions to HTML elements and get user input values

// define some basic variables we need for the calculate function
//const operator = ?  operation
const numberOne = document.getElementById('numberone') //INPUT 1
const numberTwo = document.getElementById('numbertwo') //INPUT 2
const result = document.getElementById('result') //Output

//Calculate - the fuction that brings it all together
function add() {
  // sumUp will take 2 values and add them together
  function sumUp(valueOne, valueTwo) {
    //convert strings to numbers and add together  
    return Number(valueOne) + Number(valueTwo); // convert string value to a number value
  };
  //sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
  let sum = sumUp(numberOne.value, numberTwo.value); //
  // numberOne.value = will get the input from the user for that box (2, 67, 890)
  result.value = sum.toString();
  //result is converted to a string and applied to the value property of our result input
};

function minus() {
  function minus1(valueOne, valueTwo) {
    return Number(valueOne) - Number(valueTwo);
  };

  let sum = minus1(numberOne.value, numberTwo.value);
  result.value = sum.toString();
}

function multiply() {
  function times(valueOne, valueTwo) {
    return Number(valueOne) * Number(valueTwo);
  };

  let sum = times(numberOne.value, numberTwo.value);
  result.value = sum.toString();
}

function divide() {
  function divid(valueOne, valueTwo) {
    return Number(valueOne) / Number(valueTwo);
  };

  let sum = divid(numberOne.value, numberTwo.value);
  result.value = sum.toString();
}


