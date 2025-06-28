// Class And object - constructor

// What is a Constructor?
// A constructor is a special method inside a class that:
// -Automatically executes when a new object is created
// -Initializes the object’s properties with values
 
//Syntex
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// constructor() is the keyword
// It runs automatically when we do new Person("Shubham")
// this.name = name assigns the passed value to the property

// Detailed Breakdown (Memory + Flow)
// const p1 = new Person("Shubham");
// What Happens:
// 1.Memory is allocated for the object.
// 2.constructor("Shubham") is called.
// 3.this.name = "Shubham" — property assignment happens.
// 4.Object is returned and stored in p1.

// Interview Tips for Constructor
// | Q                                              | A                                                                                                                      |
// | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
// | Can a class have multiple constructors?        | No, TypeScript/JavaScript doesn’t support constructor overloading directly. You simulate it using optional parameters. |
// | Is constructor mandatory?                      | No, but without it, you can’t set values directly during object creation.                                              |
// | What happens if you don’t write a constructor? | A default empty constructor is used.                                                                                   |

// Real-Life Analogy:
// -Class = Recipe
// -Constructor = Cooking steps
// -Object = Final dish

// What is this?
// this refers to the current object on which a method or constructor is being called.
// 🔑 Think of it as:
// 👉 "The object that’s currently being created or used."

// Code Example with this
// class Student {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name; // refers to Student object's 'name'
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, I am ${this.name}, ${this.age} years old`);
//   }
// }
// const stu1 = new Student("Shubham", 22);
// stu1.greet(); // Hello, I am Shubham, 22 years old

// this in methods
// class Counter {
//   count: number = 0;
//   increment() {
//     this.count++; // updates count of the specific object
//   }
// }
// const c1 = new Counter();
// c1.increment();
// console.log(c1.count); // 1

// Q: What if I don’t use this in a class?
// 👉 Without this, JavaScript/TypeScript will think you're using a local variable.
// constructor(name: string) {
//   name = name; // Wrong! This only re-assigns the parameter to itself.
// }
// ✅ Correct:
// constructor(name: string) {
//   this.name = name;
// }

// this in Different Contexts
// | Context              | What `this` Refers To                              |
// | -------------------- | -------------------------------------------------- |
// | Constructor          | The object being created                           |
// | Method inside class  | The object calling the method                      |
// | Arrow functions      | In classes, `this` is preserved (lexical)          |
// | Event handlers (DOM) | Refers to the element triggering the event (in JS) |
