// Threads, Concurrency, Parallelism

// webworker is a javascript program running a different thread alongside main thread
// lack access to windows, document object
var worker = new Worker('worker.js')
worker.postMessage('HELLOOOO')

addEventListener('message')

/*
Example of Concurrency:

Concurrency (Single-Core CPU): similar to eating with one mouth
- running one task and then switching to next

Concurrency + parallelism (Multi-Core CPU): similar to eating with multiple mouths
- running multiple tasks at the same time
*/

// NODE (achievable example of parallelism by running node instances)
// 'spawn' a new process and run by 'git' to run a new process
const {spawn} = require('child_process')

console.log(spawn('git', ['stuff']))

