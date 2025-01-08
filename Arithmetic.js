let a = parseFloat(prompt("Enter a value:")); // Convert to number
let b = parseFloat(prompt("Enter b value:")); // Convert to number

function Add() {
    console.log(a + b);
}

function Mul() {
    console.log(a * b);
}

function Sub() {
    console.log(a - b);
}

function Div() {
    if (b !== 0) {
        console.log(a / b);
    } else {
        console.log("Cannot divide by zero");
    }
}

function Mod() {
    if (b !== 0) {
        console.log(a % b);
    } else {
        console.log("Cannot divide by zero");
    }
}

Add();
Mul();
Div();
Mod();
Sub();
