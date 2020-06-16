// Compose
const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50))

// Pipe -> same thing except going from right to left it goes left to right
const pipe = (f, g) => (data) => g(f(data));

// Additional Examples
fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)

// Arity: number of arguments a function takes
// In functional programming, the fewer number of params it is easier to use the fn (i.e.: currying, compose, pipe)
