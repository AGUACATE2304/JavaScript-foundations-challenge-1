# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
Is scripting lenguage (the machine start reading from top to down, reading and executing on same time) that enable you create dynamically updates. 
```

## About values

### What is a primitive value?

```
À primitive value is data stored dircetly in a variable. These include, booleans,  strings, null, and undefined data.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
1.Number:
    let age = 25; // an integer
    let price = 19.99; // a floating-point number

2.String:
    let name = "John Doe";

3.Boolean:
    let isLogged = true;
    let isInactive = false;

4.Undefined:
    let x;
    console.log(x); // undefined

5.Null:
    let emptyValue = null;

6.Symbol:
    const uniqueKey = Symbol("description");
```

## About variables

### What is a variable in JS?

```
Is a container for storing data, there are diferent type of variables.
    
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
const:
    Is used to store a variable that is always the same, never change his value

let:
    Is to store a variable, that his value can change in the same project, it can be 
    a varaible that store de level progresion of a player.

var:
    Is to store a variable, but is not actualy used.

Var is not longer in use, you can fint it in legacy code, but let or const is better.
```

### Which are the most used var naming conventions in JS?

```
Camel case, is the most popular one, is basen on go in first leter in cappital letter

Exemple:

var defaultCodeVariableMainScript = playerLive;
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
Equality (==): 
    let x = 5;
    let y = "5";

    console.log(x == y);


Inequality (!=): 
    let a = 10;
    let b = 20;

    console.log(a != b);

Strict Equality (===):
    let p = 5;
    let q = 5;
    
    console.log(p === q);

Strict Inequality (!==):
    let m = 10;
    let n = "10";

    console.log(m !== n);

Greater Than (>):
    let price1 = 25;
    let price2 = 20;

    console.log(price1 > price2);

Less Than (<):
    let score1 = 85;
    let score2 = 90;

    console.log(score1 < score2);

Greater Than or Equal To (>=):
    let value1 = 100;
    let value2 = 100;

    console.log(value1 >= value2);

Less Than or Equal To (<=): 
    let temperature1 = 15;
    let temperature2 = 20;

    console.log(temperature1 <= temperature2); 

```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
Logical AND (&&):
    let isSunny = true;
    let isWarm = true;

    let goOutside = isSunny && isWarm;
    console.log(goOutside);

Logical OR (||):
    let isWeekend = false;
    let isHoliday = true;

    let planVacation = isWeekend || isHoliday;
    console.log(planVacation);

Logical NOT (!):
    let isRainy = true;

    let takeUmbrella = !isRainy;
    console.log(takeUmbrella);
```
