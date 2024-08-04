// var : global scoped variable
var container=13;
console.log(container);
var container="blue";
console.log(container);
// we can reassign the value in var
var x=13,y=14,z=20;
var contain;
console.log(contain);  // will give output as undefined since it is empty

//example
var bgColor="green";
document.querySelector(".up-container").style.backgroundColor=bgColor;
var bgColor="pink";
document.querySelector(".bottom-container").style.backgroundColor=bgColor;

function heading(){
    document.querySelector(".heading").style.color=bgColor;
}
heading();
var bgColor="blue";
heading();

// let : block scoped variable
//let bgColor="blue";  // we can't declare a variable again and again in let
let sColor="pink";
// const : block scoped variable but only one assignment is allowed
const yColor="hue";
// yColor="beach";  // gives an error if assigned again