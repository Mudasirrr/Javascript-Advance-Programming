/**
 * Sometimes we may need to execute two or more asynchronous operations
 *  based on the result of preceding promises. In this case, promises are
 *  chained. Still using our created promise, let’s order an uber if we are 
 * going on a date.

So we create another promise:
 */


const weather = true;


const myClass = function() {
    const promise = new Promise(function(resolve,reject){
        if (weather) {
            const classDetails ={
                name: 'Comsats University',
                location: 'Taxila',
                ranking: 1 
            };
            resolve(classDetails);
        } else {
            reject(new Error("Bad weather, so no Class"));
        }
    })
    .then(function(done){
        console.log('we are going on a class!');
        console.log(done);
    })
    .catch(function(error){
        console.log(error.message)
    })
}
myClass();
