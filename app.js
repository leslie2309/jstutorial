let name ='Leslie' // string
let age = 30; //number
let isApproved = true; //boolean
let firstName = undefined; //undefined
let selectedColor = null; //null 


//person object into one
let name ='Leslie' 
let age = 30;
//this is an object
let person = { 
    name: 'Mosh',
    age: 30
};

//dot notation
//change value of object name
person.name = 'Santana'

//bracket notation
person ['name'] = 'Janeth' 

//arrays
let selectedColors = ['red','blue']
// arrays are dynamic and can change
selectedColors[2] = 'green'; 
//displaying an element in an array
console.log(selectedColors [0]); 

//this is a function performing a task
function greet (name) {
    console.log ('Hello World')
}
//how to call a function
greet ('John');

//calculate a value
function square (number) {
    return number * number; 
}

greet ('John', 'Smith')