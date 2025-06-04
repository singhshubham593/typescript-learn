/*
Q) What is an Enum in TypeScript?
An Enum (short for "enumeration") is a named set of constant values.
It helps you define a group of related values (like days, roles, statuses) and gives them readable names.

🔤 Enum Syntax
enum EnumName {
  VALUE1,
  VALUE2,
  VALUE3
}
  */

// Example: Numeric Enum
enum Direction {
  North,   // 0
  East,    // 1
  South,   // 2
  West     // 3
}
let dir: Direction = Direction.North;
console.log(dir); // 0
//By default, values are auto-incremented numbers starting from 0.

// Custom Numeric Enum
 
enum Status {
  Pending = 1,
  InProgress = 3,
  Completed = 5
}
console.log(Status.Pending);     // 1
console.log(Status["Completed"]); // 5
//You can assign custom numbers.

// String Enum
 
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"
//String enums are more readable and preferred in APIs/logs.

// Reverse Mapping (only for numeric enums)
enum Color {
  Red = 1,
  Green,
  Blue
}
console.log(Color[2]); // "Green"
console.log(Color.Green); // 2
//Not possible with string enums.

// Enums in Functions
enum LogLevel {
  Info,
  Warning,
  Error
}
function log(message: string, level: LogLevel) {
  console.log(`[${LogLevel[level]}] ${message}`);
}
log("Server started", LogLevel.Info);
// Output: [Info] Server started

//Const Enums (compile-time only)
const enum Days {
  Mon,
  Tue,
  Wed
}
let today = Days.Tue;
// Const enums are inlined at compile time for performance. But they don't allow reverse mapping.
/*
// Why Use Enums?
Improves code readability and maintainability.

Prevents using magic strings/numbers.

Provides auto-complete and type safety in editors.
*/

// Real-World Example
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

function handleResponse(status: HttpStatus) {
  if (status === HttpStatus.OK) {
    console.log("Request successful!");
  }
}

/*
🔚 Summary
| Type       | Values            | Reverse Mapping | Use Case                  |
| ---------- | ----------------- | --------------- | ------------------------- |
| Numeric    | Auto or custom    | ✅ Yes           | Flags, internal enums     |
| String     | Custom strings    | ❌ No            | API responses, user roles |
| Const enum | Compile-time only | ❌ No            | Performance optimization  |
*/