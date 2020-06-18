console.log("call back function");

const list =['man','woman','child'];
console.log("Before function call:",list)

//create a new array
//loop over the array and map the data to new content
const newList = list.map(function(val){
    return val + ' Kind';
});

console.log("after function call:",newList)
/**
 * In the example above, we used the .map() method to iterate through the
 *  array list, the method ```accepts a callback function``` which states how each 
 * element of the array will be manipulated. Callback functions can also accept 
 * arguments as well.
 */