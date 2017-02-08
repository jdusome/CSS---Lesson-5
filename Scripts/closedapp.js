// IIFE - Immediately Invoked Function Express


//this funtion will call itself, and is outside of global scope
//this makes sure all of our js functions are closed off from one another

(function(){

let myVariable = 500;

})();




let myFunction = (function(){

let myVariable = 500;
let yourVariable = 1000;

let myObject = {
    one: myVariable,
    two: yourVariable
}

return myObject;

})();
