/**
 * Await

Await is only used with an async function. The await keyword is used in
 an async function to ensure that all promises returned in the async 
 function are synchronized, ie. they wait for each other. Await eliminates
  the use of callbacks in .then() and .catch(). In using async and await, 
  async is prepended when returning a promise, await is prepended when calling 
  a promise. try and catch are also used to get the rejection value of an async
   function. Let's see this with our date example:
 */

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


async function myClass(){
    try{
        let classDetails=await "class";
        let message = await orderCream(classDetails);
        console.log(message);
    } catch(error){
        console.log(error.message)
    }
}
(async () =>{
    await myClass();
})();