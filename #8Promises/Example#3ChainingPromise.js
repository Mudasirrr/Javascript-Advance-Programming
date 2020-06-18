/**
 * Sometimes we may need to execute two or more asynchronous operations
 *  based on the result of preceding promises. In this case, promises are
 *  chained. Still using our created promise, let’s order an uber if we are 
 * going on a date.

So we create another promise:
 */
console.log("\n\nOutput of the function\n\n")

const weather = true;

var classDetails ={
    name: 'Comsats University',
    location: 'Taxila',
    ranking: 1 
};

const orderCream = function() {
    return new Promise(function(resolve,reject){
        const message =  `Get me an Cream ASAP to ${classDetails.location}, we are going to class!`;
        resolve(message);
    }
        /**or
        const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;
        return Promise.resolve(message)
         */
    )}


const myClass = function() {
    const promise = new Promise(function(resolve,reject){
        if (weather) {
            resolve(console.log(classDetails));
        } else {
            reject(new Error("Bad weather, so no Class"));
        }
    })
    .then(orderCream)
    .then(function(done){
        console.log(done)
    })
    .catch(function(error){
        console.log(error.message)
    })
}
myClass();