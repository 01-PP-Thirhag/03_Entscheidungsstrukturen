"use strict";
// Entscheidungsstrukturen | control flow
// Deklaration + Assigment
const ageJohn = 35;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true && true)
// if (isJohnOlder)  
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter."); 
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true)
// if (fals)
// if(isJohnOlder)
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter");
// }
// else
// {
//     console.log("John ist jünger");
// }
/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older")

/************ IF - ELSE IF  ************/

// mit alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder)
{
    console.log("John ist älter.");
}
//<--- 1.n Alternativens

else if (isJohnEqual)
{
    console.log("John ist gleich alt.");  
}
//<--- 
else
{
    console.log("John ist jünger")
}