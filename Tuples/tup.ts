/*
//Q)What is a Tuple in TypeScript?
A tuple is a special type of array where:
The number of elements is fixed.
The types of elements are known and can be different.
In short: Tuple = Fixed length + Known types

Q) Why Use Tuples?
You want to represent a fixed structure (e.g. a pair of coordinates, a result with a status).
You need positional typing (i.e., the meaning depends on position, like [string, number]).
*/

// Tuple Syntax 
//let tupleName: [type1, type2, ...] = [value1, value2, ...];

// Basic Example
let person: [string, number] = ["Alice", 25];
console.log(person[0]); // "Alice"
console.log(person[1]); // 25
//This tuple must always contain a string followed by a number.

// Type Safety
//If you try to change the order or use wrong types:
//let wrong: [string, number] = [25, "Alice"]; // ❌ Error

// Tuple with Optional Elements
 
let data: [string, number?] = ["Hello"];
//Here, the second element is optional.

// Tuple with Rest Elements (variable length for last items)
let scores: [string, ...number[]] = ["Math", 90, 85, 88];
//First is a string, rest are numbers.

// Tuple with Destructuring
 
let user: [string, number] = ["Bob", 30];
//const [name, age] = user;
console.log(name); // "Bob"
//console.log(age);  // 30

// Named Tuples (for better readability in tools/VS Code)
type Point = [x: number, y: number];
//let origin: Point = [0, 0];

// Tuples in Functions (Return Type)
function getUser(): [string, number] {
  return ["Charlie", 28];
}
const [username, userAge] = getUser();

/*
=> Tuples vs Array
| Feature           | Tuple                        | Array                |
| ----------------- | ---------------------------- | -------------------- |
| Fixed size        | ✅ Yes                        | ❌ No                 |
| Fixed types/order | ✅ Yes (e.g., \[string, num]) | ❌ No (all same type) |
| Used for          | Structured data              | List of same types   |
 
🔚 Summary
Tuples are fixed-size, typed arrays.
Useful when the order and type of elements matter.
Can be destructured and used as function return types.
*/