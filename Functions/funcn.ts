//  What is a Function?
// A function is a reusable block of code that performs a specific task.

// In TypeScript, you can define functions with type annotations, which helps catch errors during compile-time.

// 🔹 Basic Syntax:
// ts
// Copy
// Edit
// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(5, 3)); // Output: 8
// Explanation:

// a: number and b: number → Parameters with types.

// : number after the parameters → Return type of the function.

// 🔹 Function Expression:
// ts
// Copy
// Edit
// const greet = function(name: string): string {
//   return `Hello, ${name}`;
// };
// 🔹 Arrow Function:
// ts
// Copy
// Edit
// const square = (x: number): number => x * x;
// ✅ Interview Tip:
// “Why use functions in TypeScript?”
// Functions make code modular, reusable, and easier to debug. Type annotations prevent runtime errors by catching mistakes early.

// 🔹 2. Functions with Rest Parameters
// ✅ What is a Rest Parameter?
// It allows a function to accept an unlimited number of arguments as an array.

// 🔹 Syntax:
// ts
// Copy
// Edit
// function sumAll(...numbers: number[]): number {
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
// 🔹 Explanation:
// ...numbers: number[] → The ... rest syntax collects all arguments into an array called numbers.

// It can only be the last parameter in a function.

// ✅ Use Case:
// When you don't know how many arguments the user will pass (e.g., math operations, logging, merging arrays, etc.)

// ✅ Interview Insight:
// “What is the difference between arguments and rest parameters?”
// In JavaScript, arguments is not an actual array and doesn’t work in arrow functions. In TypeScript, rest parameters are preferred and type-safe.

// 🔹 3. Function Overloading in TypeScript
// ✅ What is Function Overloading?
// It allows multiple function signatures for a single function, with different parameter types or counts, providing different behaviors.

// 🔹 Example:
// ts
// Copy
// Edit
// // Overload signatures
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;

// // Actual implementation
// function combine(a: any, b: any): any {
//   return a + b;
// }

// console.log(combine(2, 3));        // Output: 5
// console.log(combine("Hi ", "TS")) // Output: Hi TS
// 🔹 Explanation:
// First two combine() declarations are signatures.

// Last combine() with any is the implementation.

// TypeScript decides which overload to use based on input.

// ✅ Use Case:
// When a function needs to behave differently based on types or number of arguments.

// ⚠️ Rules:
// Overloads must be followed by a single implementation.

// The implementation must handle all possible overload cases safely.

// ✅ Interview Tip:
// “How does TypeScript achieve function overloading unlike Java or C++?”
// TypeScript doesn’t do it at runtime. It only enforces type checks at compile-time by matching the input arguments to defined signatures.

// 🎯 Summary Table 

// | Feature                  | Description                                                          |
// | ------------------------ | -------------------------------------------------------------------- |
// | **Functions**            | Modular blocks of code with parameter/return types                   |
// | **Rest Parameters**      | Accepts variable number of arguments using `...`                     |
// | **Function Overloading** | Multiple function signatures with different types or argument counts |
