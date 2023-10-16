# JavaScript foundations

<figure style="text-align: center">
   <img src="./assets/javascript-icon.png" alt="DOM Tree" width="100" />
   <figcaption>JavaScript</figcaption>
</figure>

# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

JavaScript is one of the most used and popular programming languages in the world. It was born in 1995 to give interactivity to web pages and since then it has evolved to become a general-purpose programming language. In other words: it can be used for almost anything.

These are JS main characteristics:

- JS is a lightweight interpreted programming language with first-class functions.
- JS is prototype-based.
- JS is multi-paradigm. It suppors OO, imperative, and declarative paradigms.
- JS is single-threaded.
- JS is dynamic language.

## About values

In JavaScript, like any other programming language, real-world information must be translated into code. So... it is necessary to understand what types of data exist in the language in order to represent the required information.

In JavaScript there 9 data types that are divided into two large groups:

- primitive
- non-primitive.

### What is a primitive value?

In JavaScript, a primitive (primitive value, primitive data type) is an **immutable** (it cannot be altered) data type that is not an object and has no methods or properties. There are 7 primitive data types:

### `string`

In JasvaScript, a String is a sequence of characters used to represent text.

```javascript
const john = "John Doe"; // single quotes
const ada = "Ada Lovelace"; // double quotes
const interpolatedNames = `${john} and ${ada} are two strings.`; // string interpolation
```

### `number`

In JavaScript, a Number is a numeric data type in the double-precision floating point format. This means that in JavaScript **there is no difference between integers and decimal numbers**, all numbers are of type number:

```javascript
7;
3.14;
19.95;
2.998e8 - 1;
```

### `bigint`

In JavaScript, a BigInt is a numeric data type that can represent integers in the arbitrary precision format. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (`Number.MAX_SAFE_INTEGER`) for Numbers. Integer values outside this range lose precision because cannot be exactly represented and will be rounded.

A BigInt is created by appending `n` to the end of an integer or by calling the BigInt() function.

```javascript
const x = BigInt(Number.MAX_SAFE_INTEGER); // Number.MAX_SAFE_INTEGER => 9007199254740991

// BigInt: false because 9007199254740992n and 9007199254740993n are unequal
x + 1n === x + 2n;

// Number: true because both are 9007199254740992
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
```

### `boolean`

In JavaScript, a Boolean is a logical data type that can have only the values true or false. Boolean values are usually used for conditional operations, including ternary operators and control structures (if/else, for, while,...).

```javascript
/* JavaScript if statement */
if (boolean conditional) {
  // code to execute if the conditional is true
}

if (boolean conditional) {
  console.log("boolean conditional resolved to true");
} else {
  console.log("boolean conditional resolved to false");
}

/* JavaScript for loop */
for (control variable; boolean conditional; counter) {
  // code to execute repeatedly if the conditional is true

/* JavaScript while loop */
while (boolean conditional) {
  // code to execute repeatedly if the conditional is true
}
```

### `undefined`

In JavaScript, `undefined` is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

Conceptually, `undefined` indicates the absence of a value.

```javascript
let number;
console.log(number); // undefined
```

### `null`

In JavaScript, a `null` value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The Null type is inhabited by exactly one value: `null`.

Conceptually, `null` indicates the absence of an object.

```javascript
let  = null;
console.log("Value of =" + );
```

### `symbol`

In JavaScript, a Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.

```javascript
//string
const word1AsString = "hello";
const word2AsString = "hello";

console.log(word1AsString === word2AsString); // true

//symbol
const word1AsSymbol = Symbol("hello");
const word2AsSymbol = Symbol("hello");

console.log(word1AsSymbol === word2AsSymbol); // false
```

## About variables

### What is a variable in JS?

A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.

### hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Any of the following behaviors may be regarded as hoisting:

- being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
- being able to reference a variable in its scope before the line it is declared, without throwing a `ReferenceError`, but the value is always undefined. ("Declaration hoisting")
- the declaration of the variable causes behavior changes in its scope before the line in which it is declared.
- the side effects of a declaration are produced before evaluating the rest of the code that contains it.

### scope

JavaScript has 4 types of scope:

- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a function.
- Block scope: The scope created with a pair of curly braces (a block).

```javascript
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

```javascript
{
  var x = 1;
}
console.log(x); // 1
```

### `var`

The var statement (preivous to ES6) declares function-scoped or globally-scoped variables, optionally initializing each to a value.

#### Hoisting for `var`

`var` variables are hoisted to the top of their scope and initialized with a value of `undefined`.

```javascript
console.log(greeter);
var greeter = "say hello";

// This is interpreted as
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello";
```

#### Scope for `var`

- global scoped: when a var variable is declared outside a function.
- function scoped: when it is declared within a function.

#### Problem with `var`

`var` pollutes the global scope, Unexpected updates can occur in other parts of your code if it is not absolutely controlled.

### `let`

The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

#### Hoisting for `let`

let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a `ReferenceError`.

#### Scope for `let`

- block scoped: let declarations are scoped to blocks as well as functions.

### `const`

The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

#### Hoisting for `const`

const declarations are hoisted to the top. Unlike var which is initialized as undefined, the const keyword is not initialized. So if you try to use a const variable before declaration, you'll get a `ReferenceError`.

#### Scope for `const`

- block scoped: const declarations are scoped to blocks as well as functions.

## About operators

### Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

#### Strict equal (`===`)

Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.

```javascript
const var3 = 3;

3 === var1; //true
```

#### Strict not equal (`!==`)

Returns true if the operands are of the same type but not equal, or are of different type.

```javascript
const var1 = "1";

var1 !== "3"; //true

3 !== "3"; //true
```

#### Greater than (`>`)

Returns true if the left operand is greater than the right operand.

```javascript
const var1 = 1;
const var2 = 2;

var2 > var1; //true

"12" > 2; // true
```

#### Greater than or equal (`>=`)

Returns true if the left operand is greater than or equal to the right operand.

```javascript
const var1 = 1;
const var2 = 2;

var2 >= var1; //true
var1 >= 3; //false
```

#### Less than (`<`)

Returns true if the left operand is less than the right operand.

```javascript
const var1 = 1;
const var2 = 2;

var1 < var2; //true

"2" < 12; //true
```

#### Less than or equal (`<=`)

Returns true if the left operand is less than or equal to the right operand.

```javascript
const var1 = 1;
const var2 = 2;

var1 <= var2; //true

var2 <= 5; //true
```

### Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.

#### Logical AND (&&)

`expr1 && expr2`

Returns expr1 if it can be converted to false; otherwise, returns expr2.
Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.

```javascript
true && true; // true
true && false; // false
false && false; // false
```

#### Logical OR (||)

`expr1 || expr2`

Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.

```javascript
true || true; // true
true || false; // true
false || false; // false
```

#### Logical NOT (!)

`!expr`

Returns false if its single operand that can be converted to true; otherwise, returns true.

```javascript
!true; // false
!false; // true
```
