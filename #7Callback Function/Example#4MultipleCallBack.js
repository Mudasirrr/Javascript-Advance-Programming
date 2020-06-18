/**
 * Multiple functions can be created independently and used as callback functions.
 *  These create multi-level functions. When this function tree created becomes
 *  too large, the code becomes "incomprehensible" sometimes and is not easily 
 * refactored. This is known as "callback hell". Let’s see an example:
 */
function setInfo(name) {
    address(myAddress) {
        officeAddress(myOfficeAddress){
            teleNumber(myTelliNumber) {
                nextOfKin(myNextOfKin) {
                    console.log('done');//let's begin to close each function.
                };
            };
        };
    };
};
/**
 * We are assuming these functions have been previously defined elsewhere. 
 * You can see how confusing it is to pass each function as callbacks.
 *  Callback functions are useful for short asynchronous operations.
 *  When working with large sets, this is not considered best practice.
 *  Because of this challenge, Promises were introduced to simplify deferred 
 * activities.
 */