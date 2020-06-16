// HOF: takes one or more functions as arguments or returns a function as a result (often called a cb)
const hof = (fn) => fn(5);
console.log(hof(function a(x){ return x }))

// Closures
const closure = function() {
    let count = 55;
    return function getCounter() {
        return count;
    }
}

const getCounter = closure()
// info does not get mutated and acts as a private variable
console.log(getCounter())
console.log(getCounter())
console.log(getCounter())