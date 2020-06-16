// Asynchronous Promises Error Handling

// Promise.resolve('asyncfaill')
//     .then(response => {
//         Promise.resolve().then(() => {
//             throw new Error('#3 faillll')
//         }).catch(console.log)
//         return 5
//     })
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.log('FINAL error', err)
//     })

// USE of Async/await -> simpler with use of try catch {}
// IIFE
(async function(){
    try {
        await Promise.resolve('#ooooopsieee')
        await Promise.reject('doesn\'t work')
    } catch (err) {
        console.log(err)
    }
    console.log('is this still good??')
})()

// doesn't work
// is this still good?