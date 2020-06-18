const weather = true;
const promise = new Promise(function(resolve,reject){
    if (weather) {
        const dateDetails ={
            name: 'Comsats University',
            location: 'Taxila',
            ranking: 1 
        };
        resolve(console.log(dateDetails));
    } else {
        reject(new Error("Bad weather, so no Date"));
    }
})
/**If weather is true, resolve the promise returning the data dateDetails, 
 * else return an error object with data Bad weather, so no Date.  */