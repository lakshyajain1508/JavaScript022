// 1. Primitive DataTypes
let num = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let empty = null; // Null
let notDefined; // Undefined
let bigNum = 9007199254740991n; // BigInt
let sym = Symbol("id"); // Symbol

console.table([num, text, isTrue, empty, notDefined, bigNum, sym]);
console.log(typeof num); // typeof is unary operator used find type of data

// 2. Non-Primitive DataTypes
let person = { name: "Alice", age: 25 }; // Object (Key-Value pairs)
let numbers = [1, 2, 3, 4]; // Array (Ordered list of values)
function greet() {
  console.log("Hello");
} // Function (Executable block of code)
