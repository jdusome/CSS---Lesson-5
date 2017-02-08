/* JavaScript lives here */
"use strict";

// IIFE
(function(){ 

console.log("App Started");
console.info(document.title);

switch (document.title) {

case "Home":

    //declare and initialize the firstHeading variable
    //the firstHeading variable creates a reference the h1 element on the page
    let firstHeading = document.getElementById("firstHeading");

    firstHeading.style.color = "#FF00FF";
    firstHeading.style.fontWeight = "500";
    firstHeading.style.fontStyle = "italic";
    firstHeading.style.opacity = "0.5";


    //THREE STEPS FOR INJECTING CONTENT ONTO page
    //STEP 1 - Create a reference to an element (reference variable)
    let FirstParagraph = document.getElementById("firstParagraph");
    let SecondParagraph = document.getElementById("secondParagraph");

    //STEP 2 - Create a variable that contains CONTENT (content variable)
    let myContent = "It was a sunny day in Florida. It felt great. I love the sun.";
    let myHTMLContent = "<h2>Second Heading</h2>"
                        + "<p>This is an inner paragraph to the second paragraph</p>";

    //STEP 3 - Assign the variable with your content to the textContent property of the reference variable (operation)
    FirstParagraph.textContent = myContent;
    SecondParagraph.innerHTML = myHTMLContent;

    //Assigns the button in our index to a variable
    let clickMeButton = document.getElementById("clickMeButton");

    //adds an event listener to trigger when the clickMeButton is clicked. It will call the Click function.
    clickMeButton.addEventListener("click", Click);

    // create a Click function, which will log to the console when we click. Used as an event handler.
    function Click() {
        console.log("Clicked...");
    }

    break;

    case "Projects":

    let myVariable = 10;
    let myVariable1 = 20;
    let myVariable2 = 30;
    let myVariable3 = 40;

    let myArray = ["A value","another value", 10, true];

    console.log("Outer: " + myVariable);

    Parent(myVariable, myVariable2, myVariable3);
    console.log("Parent Value: " + Parent(myVariable));


    /* You cannot call the Child function outside of the Parent Class */

    function Parent(myLocalVariable1, myLocalVariable2, myLocalVariable3) {

        myLocalVariable1 += 12;

        console.log("Arguments[0]: " + arguments[0]);

        return myLocalVariable1;
    }


    //you can call the function above the function due to hoisting
    /*
    MyFunction();

    //named function (anything you put in will be passed into the function when callded)
    function MyFunction() {
        let myVariable = 20;

        console.log("Inner: " + myVariable);
    }

    console.log("Outer: " + myVariable)



    //alias for function
                    //this part is the anonymous function
    /*
    let MyFunction2 = function() {

    }
    */

    break;

    case "Contact":

    

    break;

} //end case

let myVariable = 500;



})(); //end of the IIFE (immediately invoked function express)




