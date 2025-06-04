/*
1. Introduction to Type Inference
Q.What is Type Inference?
TypeScript automatically determines the type based on the assigned value.
*/
let names = "Alice";  // inferred as string
let ages = 25;        // inferred as number
//If you hover over variables in your editor, you'll see the inferred types.
/*
2. Type Annotations
Q.What are Type Annotations?
You explicitly tell TypeScript what the type should be.
*/
let usernames: string = "Bob";
let score: number = 100;
let isActive: boolean = true;

// Function Parameter and Return Types
function greet(name: string): string {
  return `Hello, ${name}`;
}
//Use annotations when:
//Code is complex
//Inference isn't enough
//For clarity and documentation


//3. Introduction to Interfaces & Type Aliases
//- Interface=Used to define the shape of an object (properties + types)
interface User {
  name: string;
  age: number;
}
let users: User = {
  name: "Alice",
  age: 30
};


//Type Alias=You can do the same with type:
type Users = {
  name: string;
  age: number;
};
/*
🔁 Differences
| Feature       | `interface` | `type`                           |
| ------------- | ----------- | -------------------------------- |
| Extendable    | ✅ Yes       | ✅ Yes (with `&`)                 |
| Unions        | ❌ No        | ✅ Yes                            |
| Preferred for | Objects     | Flexible use (union, primitives) |
*/
 
// 4. Extending Interfaces=Use extends to build on top of another interface.
 
interface Persons {
  name: string;
}

interface Employee extends Persons {
  employeeId: number;
}

const emp: Employee = {
  name: "Bob",
  employeeId: 101
};

/*
//5. Fundamentals of Type Aliases = You can alias any type — objects, unions, functions, etc.
type ID = number | string;
type User = {
  id: ID;
  name: string;
};

const user: User = {
  id: "abc123",
  name: "Alice"
};
Aliases help simplify and reuse complex types.
*/

//6. Intersection Types (&)=Combines multiple types into one using &.
type A = { name: string };
type B = { age: number };
type Person = A & B;
const p: Person = {
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