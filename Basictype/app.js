// Basic Types 
/*
=> Primitive types are basic immutable data types. They are stored directly in memory (stack) and compared by value.

🔹 Examples:
-string
-number
-boolean
-null
-undefined
-symbol
-bigint

💡 Characteristics:
Feature     	Description
Stored in	    Stack
Mutable?	    ❌ Immutable
Compare by	    Value (===)
Copy behavior	Creates a separate copy
*/
// Example of primitive types
var a = 10;
var b = a;
b = 20;
console.log(a); // 10 (a is unaffected)
/*
=>Reference types are objects that store a reference (memory address) to the actual data. They are mutable and compared by reference.

Examples:
-object -{}
-array -[]
-function -()

💡 Characteristics:
Feature	Description
Stored in	Heap (with reference on Stack)
Mutable?	✅ Mutable
Compare by	Reference (memory address)
Copy behavior	Creates a reference to the same object
*/
var obj1 = { name: "Alice" };
var obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Bob (obj1 is affected)
/*
Summary Table

| Feature    | Primitive Type          | Reference Type                |
| ---------- | ----------------------- | ----------------------------- |
| Stored in  | Stack                   | Heap (reference in stack)     |
| Mutability | Immutable               | Mutable                       |
| Comparison | By value                | By reference                  |
| Data Types | `number`, `string`, etc | `object`, `array`, `function` |
| Copying    | Creates a new value     | Creates a new reference       |


*/ 
