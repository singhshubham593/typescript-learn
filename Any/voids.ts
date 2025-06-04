
/*
1. any — the "escape hatch"
Use: When you're not sure what the type will be, or need to bypass type checking (⚠️ Not recommended for production).
*/
//
// let data: any = "hello";
// let data;
//data = 42;
//data = true;
//console.log(data.toUpperCase()); //  No error (but unsafe!)
//- Accepts any type.
//- No type safety — allows anything, no checks.

//2. unknown — safer alternative to any
 //Use: When the type is not known yet, but you don’t want unsafe operations.
 
let value: unknown = "hello";
// value.toUpperCase(); // Error

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}
//- You must check the type before using.
//- Much safer than any.

//3. void — for functions with no return value
 //Use: When a function doesn’t return anything.
 
function greet(): void {
  console.log("Hello!");
}
//Tells TypeScript "this function returns nothing".
//Used for side-effect functions (e.g., logging, updating UI).

/*
 4. never — for impossible or never-ending functions
 Use: For functions that:
Throw errors
Never return
*/
 
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
//Good for exhaustive checks in union types.

// 5. object — non-primitive values
let obj: object = { name: "Alice" };
// obj.name // Not allowed directly
//Accepts only non-primitive types.
//Limited usefulness — prefer {} or custom types.

//6. null and undefined
let x: null = null;
let y: undefined = undefined;
//Can be explicitly assigned, but usually part of union types like string | null.

/*
//Comparison Table
| Type        | Description                          | Safe? | Use When...                           |
| ----------- | ------------------------------------ | ----- | ------------------------------------- |
| `any`       | Anything, no restrictions            | ❌     | You want to escape TypeScript (avoid) |
| `unknown`   | Anything, but must check type to use | ✅     | You're unsure yet, but want safety    |
| `void`      | No return value                      | ✅     | Function returns nothing              |
| `never`     | Never returns (throws/errors/loops)  | ✅     | Infinite loops or error functions     |
| `object`    | Non-primitive                        | ⚠️    | Use more specific types               |
| `null`      | Absence of a value                   | ✅     | Optional/null values                  |
| `undefined` | Not defined yet                      | ✅     | Default uninitialized variable        |

*/

// Example with all together:
 
function process(input: unknown): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log("Unknown type");
  }
}

function crash(): never {
  throw new Error("Something went wrong");
}

let anything: any = 123;
let something: unknown = "test";

/*
// Best Practices
- Prefer unknown over any
- Use void for functions that don’t return anything
- Use never for unreachable code or exhaustive checks
- Avoid using any unless necessary (e.g., quick prototypes)

*/