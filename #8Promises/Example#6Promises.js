// el.addEventListener("click", submitForm);

/*  callback pyramid of doom
movePlayer(100, 'Left', function(){
    movePlayer(400, 'Left', function(){
        movePlayer(10, 'Right', function(){
            movePlayer(330, 'Left', function(){
            });
        });
    });
});
*/

/* Promises (example)
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))
*/

// PROMISE
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'ROOKIEE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

// promise.all waits until all promises are resolved then logs values
Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })
// promise.then(result => console.log(result))
promise
    .then(result => result + '!$')
    .then(result2 => result2 + '_?')
// .catch will catch any errors placed before it
    .catch(() => console.log('error!'))
    .then(result3 => {
        console.log(result3 + '!!@@!');
    })

