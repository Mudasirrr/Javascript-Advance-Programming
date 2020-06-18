/**
 * Naming Callback functions
Callback functions can be named or anonymous functions. In our first examples, 
we used anonymous callback functions.
 Let’s look at a named callback function:
 */
function greeting(name){
    console.log(`hello ${name}, welcome to Pakistan`)
}
/**
 * The above function is assigned a name greeting and has an argument of name. 
 * We're also using an ES6 template string. 
 * Let’s use this function as a callback function.
 */
function introduction(firstName,lastName,callbackFunction){
    const fullName = `${firstName} ${lastName}`;
    callbackFunction(fullName);
    console.log('callback Function:',)
    
}

introduction('Mudasir',"Hussain",greeting);
/**
 * Notice the usage of the callback? The succeeding brackets,
 *  () after the function are not used when passing the function as a parameter.

Note: The callback function is not run unless called by its containing 
function, it is called back. Hence, the term call back function
 */