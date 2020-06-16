new Error('oopsie')

const myError = new Error('oopsie')

myError.stack; // 'Error: oopsie at <anonymous>:1:17'
myError.name; // 'Error'
myError.message; // 'oopsie'

// Three different type of errors:

// new SyntaxError
// new Error
// new ReferenceError

// Throw statement:
// 'throw new Error()' stops script and prompts dev to handle error
// 'throw' allows types: 'string', true (BOOL), new Error()
// used to generate errors

// Is there a catch? -> Runtime catch: onerror()
// In Node.js: process.on('uncaughtException')
// You can use 'catch' to handle errors when it happens