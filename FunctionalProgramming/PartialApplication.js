// Partial Application: method to partially apply a function
const multiply = (a, b, c) => a*b*c;
// partially apply 5 into 'a' and can just call 'b', 'c' arguments
const partialMultiplyBy5 = multiply.bind(null, 5)
// calling partialMultiplyBy5 with remaining (b, c)
console.log(partialMultiplyBy5(4,10))

// Currying: expects 1 argument at a time
// Partial Application: expects all arguments on 2nd call