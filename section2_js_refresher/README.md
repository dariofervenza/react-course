# Section 2


Ways to execute js code:


1. In the browser, that is were it was designed for

2. In any computer --> server side with node js or deno / bun

3. On mobile devices --> Using Capacitor or React Native


We will focus on javascript on the browser for this section but the synthax is similar in the other two environments


# Add javascript to a html page

Two ways, both use <script> tag:

1. Between <script> tags

```html
<script>
    alert('helo')
</script>
```

2. Via <script> import


```html
<script src="script.js"></script>
```

Approach 1. is disencouraged because it can easily lead to unmaintanable code --> We always use dedicated js files


We create in 00-starting-js-proj a new folder `assets/scripts` and create  `assets/scripts/app.js`

We add it to the html header but you always have to use open and close tags `<script src="asserts/scripts/app.js" defer></script>`

    - With the `defer` we ensure that the script will be launched when the rest of the body is rendered --> If you do document.getElementById() you need that element rendered in the document

In modern js we often dont use defer but add the type="module" attr:

```html
<script src="assets/scripts/app.js" type="module"></script>
```

    - This makes that the app.js file is treated as a js module
    - A js module unlocks an import synthax which is the `import` synthax  --> Import code from script A to script B

We create scripts/utils.js and import it in app.js

    - In utils.js we will export something
    - in app.js we will import something that has been exported in utils.js


# React scripts

In read we never add <script> tags, because react automatically renders the document and adds them on its own using a `build process`

You only need in <body>:

<div id="root"></div> and tell react that this is the root element, it will use it to render the page.


Consequence: The code you write is not the code that gets executed in the browser (its transformed behind the scenes)


To do so, lets look at the dependencies:

  "dependencies": {
    "loader-utils": "3.2.1",
    "react": "19.0.0",       ---> Real react library that goes to the browser
    "react-dom": "19.0.0",   ---> Real react library that goes to the browser
    "react-scripts": "5.0.1" ---> Library used to transform The react code into executable code
  }


Why do we transform the code?

1. Raw react code will not execute (jsx is not supported)

2. The written code will NOT be optimized for production (eg, not minified: names of vars and funcs reduced, unnecessary whitespaces removed, and so on)
    2.1 Vite will automatically do this. However, we need node.js to be able to work with this.



# Import & export



We add in utils.js:

```js
export let myVar = 'dcfsdfvrgrgv';
```

And we import it app.js:
- We use always braces {}
- We use relative paths
- We can use "" or '' for the path
- We omit the file extension `.js` but you could add it, it would not fail


```js
import { myVar } from "./utils";
```

Remember to use type="module" in <script> to use import

If we inspect the compiled rezct code we observe that it does not have type="module" because the build procress merges al imported files into one (its more efficient).


## Export default

When used you only add the value, you do not need to define a variable neither give it a name

```js
export default myExport;
```

You can only have one export default per file
Without default yopu can have as many export statements as you need

To import a default value you do not use braces and you add the name you want it it:

```js
import newNameForDefault from "./utils"
```


You can export default a function or variable but you cannot export default let ...


You can combine named exports (one or more) with one default export (only one)

You can combine all named exports in a module into an object by using * and giving it a name:

```js
import * as combined from "./utils"
```

You can also use aliases on each individual import


```js
import { myKey,  other as otherKey} from "./utils"
```



# Revisiting variables & values


Js works with different types of values:

- String: accepts double and single quotes + backsticks ` `
- Number: Positive or negative + float + integer (it covers all)
- Boolean: lowercase true / false
- null & undefined: both refer to an absence of a value
    - undefined: is the default value if no value has been assigned to a var
    - null: the developer has to explicitly set (its the reset value)
- objects: We will check them in the future


Values can be created were they are used eg.

```js
console.log("im a value not stored in a variable")
```

But when yuo want to store them you use variables.

- They allow reusability
- They improve readability

## Creating variables

For the var names we use camelCase and can use numbers but not startwith them. 

The only special characters allowed are $ and _ in var names

- let keyword:

```js
let msg = "Im a message";
```


- const keyword:
    - Must not be reassigned
    - Try to be clear about your intentions, if the value os not gonna change use const over let



- var keyword:
    - Function scoped
    - Not block scoped, if created in a for or if, it will be accesible from outside
    - its value is initialized with undefined
    - its a global object (attached to window)

let and const are:
    - block scoped, the cannot get out of the closest {} hence if you declare them in a if or for they cannot scape them.
    - not initialized (temporal dead zone) --> if accessed they throw a ReferenceError


General rule: AVOID var in modern js



# Revisiting operators

Operators are: + - * / 

They can be used for:
    - numbers
    - text --> "hello" + "world"  --> this a string concatenation


Comparison operators:

    - === --> checks equality --> compares value and data type (no conversion) --> if types are different will always return false
    - <
    - >
    - >=
    - <=
    - == -> compares 2 values after converting them to the same type (type coercion)


# Revisiting functions & parameters

Functions can be created with function keyword or "() =>"

```js
function myFunc() {}

const myOtherFunc = () => {}
```

In react we will use fucntions as a block renderer


## Sending params


```js
function greet(userName, message) {
    console.log(userName);
    console.log(message);
}

greet("paco", "is very happy");
```


### Assign default values to params

```js
function greet(userName, message = "im a message") {
    console.log(userName);
    console.log(message);
}

// like in python i can override the default value
greet("aaaaaa");
greet("paco", "is very happy");
```


### Return values

- If no return --> return undefined

- Only one return per function --> not true you can do the if condition return  to control the flow

But when a function hits a return it exits as in other languages

```js
function createGreeting(userName, message = "im a message") {
    return "hi " + userName + "\n" + message;
}

const myGreet = createGreeting("dario");
```


# Arrow functions () =>


This syntax is especially popular for anonymous functions (without name) eg.

```js
...

onClick={ () => setMyNumber(1)}
```

- Anonymous functiosn can be also defined like:

```js
export default function() {

}


// but also

export default (parameter1, parameter2) => {
    return
}
```

## Omit parenthesis ()

Note, you can ommit the parenthesis in arrow functions

```js

const myFunc = (parameter) => {

}


// is equal to

const myFunc = parameter => {

}

``` 

But if:
- the function has no parameters you CANNOT omit them
- the function takes more than one parameter you CANNOT omit them


# Omit return

```js
number => {
    return number * 3;
}

// it is equivalent to

number => number * 3
```


Returning an object is invalid:


number => {age: number, name: "paco"}  // invalid


But we can do:

```js
number => ({age: number});  // the extra parenthesis make js understand the we are ismply returning an object

```

They thing is that without (), the interpreter would undertand that the braces are defining the function content


# Revisiting objects & classes



- Objects are used to group multiple values together

```js
const user = {
    name: 'Max',
    age: 25
};

```

Access objects attrs with dot notation:

```js
console.log(user.name);
```


Objects can also store functions (called then methods)


```js
const user = {
    name: 'Max',
    age: 25,
    // define a method, no function keyword needed
    greet(userName) {
        console.log("hello " + userName);
        // access object properties
        console.log(this.name)
    }
};
```

In react we will not use often the "this" keyword but it is a concept we should know


## Classes 

We will not use them much in this course, just a small mention

Classes are like blueprints to group also data, equivalent to objects but for only designing their attrs and methods


```js
// classNames should start with capitalized word
class User {
    // define the constructor
    constructor(name, age) {
        // store them in properties (attrs)
        this.name = name;
        this.age = age;
    }
    // add methods
    greet() {
        console.log("hi");
    }
}
```

We cannot use classes, we need to instanciate them:


```js
const user1 = new User("manuel", 56);
user1.greet();  // call a method

``` 

Hence the "new" keyword is used to instanciate objects


# Arrays & array methods (like map)

Apart from objects, another crucial element in js are arrays.

Technically arrays are objects, but they are a special kind of objects

We create an array by using brackets:

```js
const hobbies = ["sports", "videogames"];  // a list of values
```

Arrays can be accessed via its position on the array (indexes start at 0)

``` js
console.log(hobbies[1]);
```

## Array methods

```js
hobbies.push("new hobbie");
// findIndex requires a function as parameter that returns a bool
// it will execute the sent function for each element in the array
hobbies.findIndex((item) => {
    return item === "sports";
}); // get the index of a value

// its equivalent to:
hobbies.findIndex((item) => item === "sports");  // same as previous --> findIndex returns a number


// another useful method is map
// allows transforming every element in the array into another
const editedHobbies = hobbies.map((item) => item + "!");  // return item + "!"; adds ! to each element

// we will use map quite often, so it was important to be mentioned

// we can use map to transform every element into a different kind of element:
const newHobbies = hobbies.map((item) => ({text: item})); // transform an array of strings into an array of objects

```
hobbies.map((item) => ({})); is equivalent to:

hobbies.map((item) => {
    return {text: item};
})

# Destructuring

It quite a new feature and often used in modern js


```js
const userNameData = ["Max", "Pain"];

// we could get each element in a variable by doing:
const [first, second] = ["Max", "Pain"];

```


## Destructure objects

```js
const user = {
    name: "Manolo",
    age: 34,
}

// instead oof doing user.name and user.age to access their values we can do
// we MUST use the same var names as the keys in the object
const {name, age} = {
    name: "Manolo",
    age: 34,
} // we get name === "Manolo"

// we can use alias if we do not want the variable name to be same as the key name:
const {name: userName, age} = {
    name: "Manolo",
    age: 34,
} // we get userName === "Manolo"
```

This is a crucial javascrypt feature and we will use it quite often.

We can do destructuring in a function parameter. Instead of sending an object:

```js
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}

// if in params we put they key names in braces {}, we destructure:

function storeOrder({id, currency}) { // destructuring, it is still only one argument when you call it
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
```

# The SPREAD operator (...)

```js
const hobbies = ["videogames", "sports"];
const moreHobbies = ["lecture", "theater"];

// If i want to create a new list merging these two i can use the spredad operator
// ...[] -> this unpacks the elements like in python * does to a list
const mergedHobbies = [...hobbies, ...moreHobbies];

```


## Use the spread operator in objects

```js
const user = {
    name: "aldo",
    age: 25
}

// I want to create a new object with the values of the previous but adding a new key:

const extendedUser = {
    isAdmin: true,
    ...user,  // spread the object
}
```


# Revisiting control structures


```js

const password = prompt("Your password");  // ask the value in the browser, is the equivalent to input()

if (true) {
    console.log("aaaa");
} else if (false) {
    console.log("dsss");;
} else {
    console.log("vdfvf");
}
```

## For loops

```js
const users = ["aldus", "pacus"];
// iterate over array
for (const user of users) {
    console.log(user);
}
```

# Manipulating the DOM - Not with react!

In react we will not reach the DOM and we will NOT manipulate it (eg document.getElementById()).

Instead react will do it for us

We will not do:
- document.querySelector('ul');


# Using functions as values

You can pass a function as an argument:


```js
// setTimeout requires 2 arguments
// first is a function
// second is the number of miliseconds to wait before executing the function
const afunc = () => {};
setTimeout(function myf() {}, 2000);
setTimeout(() => {}, 2000);
setTimeout(afunc, 2000);

```

Build your own function that received a fucntion

```js
function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("hi"));
```

# Defining functions inside of functions

```js

function init() {
    function greet() {
        console.log("hi2");
    }

    greet();
}

/// But i could not execute greet() here, its only available in init() scope.

init();

```


# Reference vs primitive values


```js

let userMessage = 'Hello'; // this is a primitive value (string, bool, number)

// IMPORTANT: In js we cannot edit primitives

userMessage = "different message"; // here the old value is thrown again
userMessage = userMessage.concat("!!!"); // this also produces a new string instead of editing the old one

// IMPORTANT: this changes with objects, we can edit them

const hobbies = ["a", "b"];
hobbies.push("c"); // here the object is modified, we do not create a new one under the hood

// remember that arrays are also objects

// In js all objects are REFERENCE VALUES: in their variable the do not store the value but the address of it in memory

// NOTICE THAT I EDITED AN ARRAY DEFINED WITH CONST!!!

// that const means the memory address is the same, but not what the address contains