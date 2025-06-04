"use strict";
//An array is a special data structure used to store multiple values of the same type in a single variable.
//= Declaring Arrays in TypeScript
//Method 1: number[] (most common)
let numbers = [1, 2, 3, 4, 5];
/*Explanation:
let numbers → declares a variable named numbers
: number[] → tells TypeScript this is an array of numbers
= [1, 2, 3, 4, 5] → initializes the array with 5 number elements
*/
//Method 2: Array<string> (generic syntax)
let fruits = ["apple", "banana", "cherry"];
/*Explanation:
Array<string> → Generic syntax that also declares an array of strings
"apple", "banana", "cherry" → string elements stored in the array
*/
//= Accessing Elements
console.log(fruits[0]); // apple
//Explanation:
//fruits[0] → accesses the first element of the array ("apple"), using zero-based indexing
//= Updating Array Elements
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "cherry"]
//Explanation:
//Changes the second element (banana) to orange
//+ Adding Elements
//Using push() (adds to end)
fruits.push("grape"); // ["apple", "orange", "cherry", "grape"]
//Using unshift() (adds to beginning)
fruits.unshift("kiwi"); // ["kiwi", "apple", "orange", "cherry", "grape"]
//- Removing Elements
//Using pop() (removes last element)
fruits.pop(); // removes "grape"
//Using shift() (removes first element)
fruits.shift(); // removes "kiwi"
//= Looping through Arrays
//With for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}
//Explanation:
//Loops through each item in the array and prints it
//With .forEach() method
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
//Explanation:
//forEach() takes a function
//fruit is the current element
//index is the position of the element in the array
/*
* Array Properties and Methods
Property / Method	    Description
length	                Total number of elements
push()	                Add item to the end
pop()	                Remove last item
shift()	                Remove first item
unshift()	            Add item to beginning
indexOf()	            Returns index of an element
includes()	            Checks if item exists in array
map()	                Transforms each element and returns new array
filter()	            Filters elements based on condition
*/
