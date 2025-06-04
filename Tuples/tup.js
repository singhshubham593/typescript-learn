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
var person = ["Alice", 25];
console.log(person[0]); // "Alice"
console.log(person[1]); // 25
//This tuple must always contain a string followed by a number.
// Type Safety
//If you try to change the order or use wrong types:
//let wrong: [string, number] = [25, "Alice"]; // ❌ Error
// Tuple with Optional Elements
var data = ["Hello"];
//Here, the second element is optional.
// Tuple with Rest Elements (variable length for last items)
var scores = ["Math", 90, 85, 88];
//First is a string, rest are numbers.
// Tuple with Destructuring
var user = ["Bob", 30];
//const [name, age] = user;
console.log(name); // "Bob"
//let origin: Point = [0, 0];
// Tuples in Functions (Return Type)
function getUser() {
    return ["Charlie", 28];
}
var _a = getUser(), username = _a[0], userAge = _a[1];
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
