// Context vs Scope

// Scope means what does the variable access in the function (what is in the variable environent) -> Visibility of variables
// Context asks what is the value of 'this' keyword (reference to the value of the object) -> how a function is invoked with the value of this keyword

console.log(typeof null) // object -> Brendan Eich acknowledged it is a mistake
console.log(typeof Symbol('hey'))

console.log(true.toString()) // silently creates a wrapper of Boolean

console.log(Array.isArray)

var a = [1,2,3,3,4,5]

var d = a
d.push(123215)
console.log(a)


// Pass by value vs Pass by reference

let obj = { a: '5', b: 'b', c: {
    deep: 'Try and copy me!'
}, d: '6'}
let clone = Object.assign({}, obj)
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)

var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq =  JSON.stringify(user1) === JSON.stringify(user2)

console.log(eq); // gives false

// TYPE COERCION