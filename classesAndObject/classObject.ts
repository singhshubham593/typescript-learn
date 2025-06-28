//Classes and Objects

//class=A class is like a blueprint or template for creating objects. It defines properties (data) and methods (functions) that the created objects will have.
// Example in JavaScript
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`Driving a ${this.color} ${this.brand}`);
  }
}

//Oject=An object is a real-world instance of a class with actual values.
const myCar = new Car("Toyota", "Red");
myCar.drive(); // Driving a Red Toyota

// How It Works (Memory + Process)
// When you do:
// const user = new Person("Shubham", 22);
// 🔹 Steps:
//     1.Memory is allocated for the object.
//     2.Constructor runs with the passed arguments.
//     3.this binds the values to the object.
//     4.Object is returned and stored in user.

// Why Use Classes and Objects?
// Code Reusability (Create multiple instances with the same structure)
// Encapsulation (Group related data and functions)
// Maintainability (Cleaner, modular code)
// Inheritance & Polymorphism (Advanced OOP features)

// class vs object(real World)
// | Concept   | Real-World Analogy            | Programming Equivalent   |
// | --------- | ----------------------------- | ------------------------ |
// | Blueprint | House design plan             | `class`                  |
// | House     | Actual building based on plan | `object`                 |
// | Feature   | No. of rooms, color, windows  | `properties` + `methods` |


// Core Concepts in Classes
// | Concept         | Description                             | Example                    |
// | --------------- | --------------------------------------- | -------------------------- |
// | **Constructor** | Method called when an object is created | `constructor()`            |
// | **this**        | Refers to the current object instance   | `this.name = name;`        |
// | **Method**      | Function inside a class                 | `drive()`                  |
// | **Property**    | Variable that holds data for an object  | `this.brand`               |
// | **Object**      | An instance of a class                  | `const car = new Car(...)` |

//  Real-World Analogy
// Think of a class as a blueprint of a house.
// It defines the rooms, doors, windows (properties).
// How to open a door or switch on a fan (methods).
// Then, you can build actual houses (objects) using that blueprint.

//In TypeScript (With Types)
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user = new Person("Shubham", 22);
user.greet(); // Hello, my name is Shubham


// constructor() & this Keyword
// 🔹 constructor()
// Special method that runs automatically when a class object is created. You usually pass parameters here to initialize properties.
// constructor(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
// 🔹 this=Refers to the current object being created or used.
// ->Inside a class: this.name means "the name property of this object".