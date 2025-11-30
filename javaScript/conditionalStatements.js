
//Conditional Statements in JS:

// const age = prompt("Enter Your Age");
// if (age == 18) {
//     alert("You re eligible");
// }
// else if (age == 20) {
//     alert("You are also eligible");
// }
// else {
//     alert("You are not eligible");
// }


// let email = "abc@gmail.com"
// let password = "123";

// let mtchEmail = prompt("Enter your email");
// let matchPassword = prompt("Enter your password");

// if (email == matchEmail && password == matchPassword) {
//     alert("Logged in successfully");
//     location.assign("../index.html");
// }
// else {
//     alert("Invaid Credentials");
// }

//conditional statements

let number = 10;
let password = "123";

let matchNumber = prompt("Enter your number");
let matchPassword = prompt("Enter your password");

if (number === Number(matchNumber) && password === matchPassword) {
    alert("Logged in successfully");
    location.assign("../index.html");
} else {
    alert("Invalid Credentials. Please try again later.");
}
// Note: Ensure to use strict equality (===) for comparison to avoid type coercion issues.
// Also, consider using a more secure method for handling passwords in real applications.       
// This example is for educational purposes only.
// In a real-world application, you would not store passwords in plain text and would use secure


