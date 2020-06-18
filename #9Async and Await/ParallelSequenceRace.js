// 3
// parallel
// sequential
// race

const promisify = (item, delay) =>
    new Promise((resolve) =>
        setTimeout(() =>
            resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
// console.log('PROMISES: ', a(), b(), c())

// runs through all the promises at the same time
async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all
    (promises);
    return `function parallel is done: ${output1} ${output2} ${output3}`
}
// parallel().then(data => console.log(data)) -> same as bottom
// parallel().then(console.log) -> returns 'Parallel is done: a b c' after slight delay
// promisfy's 'resolve' runs through each promise 'a','b','c'

// race returns the fastest promise right away
async function race() {
    const promises = [a(), b(), c()];
// 'race' built in promise method will run through promises
    const output1 = await Promise.race(promises);
    return `function race is done: ${output1}`;
}
// race().then(console.log)

// sequence: pauses after each 'output' and runs sequentially
async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `function sequence is done ${output1} ${output2} ${output3}`
}
// sequence().then(console.log)

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)