// currying: technique of translating the evaluation of a fn that takes mult. arguments into evaluating a sequence of fns each with a single argument

const multiply = (a, b) => a*b;
console.log(multiply(3,4))

const curriedMultiply = (a) => (b) => a*b;
console.log(curriedMultiply(22)(4))

const curriedMultiplyBy5 = curriedMultiply(5)
console.log(curriedMultiplyBy5(20))

