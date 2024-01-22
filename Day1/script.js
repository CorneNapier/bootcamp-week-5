let person = {
    name: 'Corné',
    age: 30
};

//example of an object using other objects
let library = {
    harryPotterPhilospherStone: {author: "", ISBN:32075325025, location: "R985", genre: ""},
    harryPotterPhilospherStone: {author: "", ISBN:32075325025, location: "R985", genre: ""},
    harryPotterPhilospherStone: {author: "", ISBN:32075325025, location: "R985", genre: ""},
    harryPotterPhilospherStone: {author: "", ISBN:32075325025, location: "R985", genre: ""},
    harryPotterPhilospherStone: {author: "", ISBN:32075325025, location: "R985", genre: ""},
};

// {} defines we using an object
// (dot) . notation allows us to access a property of an object

//accessing property in library object
console.log(harryPotterPhilospherStone.harryPotterPhilospherStone.ISBN);