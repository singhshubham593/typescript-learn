/*
1. Introduction to Type Inference
Q.What is Type Inference?
TypeScript automatically determines the type based on the assigned value.
*/
var names = "Alice"; // inferred as string
var ages = 25; // inferred as number
//If you hover over variables in your editor, you'll see the inferred types.
/*
2. Type Annotations
Q.What are Type Annotations?
You explicitly tell TypeScript what the type should be.
*/
var usernames = "Bob";
var score = 100;
var isActive = true;
// Function Parameter and Return Types
function greet(name) {
    return "Hello, ".concat(name);
}
var users = {
    name: "Alice",
    age: 30
};
var emp = {
    name: "Bob",
    employeeId: 101
};
var p = {
    name: "Alice",
    age: 25
};
//Think of it as merge types (all properties must be present).
/*
✅ Summary Table
| Concept                 | Description                     | Example                           |          |
| ----------------------- | ------------------------------- | --------------------------------- | -------- |
| Type Inference          | TypeScript guesses the type     | `let x = 5`                       |          |
| Type Annotation         | Explicitly state the type       | `let x: number = 5`               |          |
| Interface               | Object shape, can extend others | `interface User { name: string }` |          |
| Type Alias              | Alias for any type              | \`type ID = string                | number\` |
| Extending Interface     | Inherit properties              | `interface Admin extends User`    |          |
| Intersection Type (`&`) | Combine multiple types          | `type Person = A & B`             |          |

*/ 
