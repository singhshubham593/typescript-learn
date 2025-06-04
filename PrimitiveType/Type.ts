// Primitive Types (number, string, boolean, null, undefined, symbol, bigint) are basic immutable data types. They are stored directly in memory (stack) and compared by value.
/*
List of Primitive Types

| Type        | Example         | Description                                      |
| ----------- | --------------- | ------------------------------------------------ |
| `string`    | `"Hello"`       | Represents text values                           |
| `number`    | `42`, `3.14`    | Represents all numeric values (integers, floats) |
| `boolean`   | `true`, `false` | Logical true/false                               |
| `null`      | `null`          | Represents intentional absence of any value      |
| `undefined` | `undefined`     | Default value of uninitialized variables         |
| `symbol`    | `Symbol('id')`  | Unique and immutable identifier (ES6)            |
| `bigint`    | `123n`          | Represents large integers beyond `Number` limit  |


Why are they Important?
-They help define clear and strict variable types.
-Provide type safety in TypeScript.
-Are easy to use, fast, and memory efficient.

Primitive types are compared by value, not by reference.
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a is unchanged)
*/

//Example of Primitive Types

let myName: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
let nothingHere: null = null;
let notAssigned: undefined = undefined;
let id: symbol = Symbol("id");
//let bigNumber: bigint = 9007199254740991n;
