// no side effects
// input --> output

const array = [1,2,3]
function removeLastItem(arr){
    // concat methods creates new copy of the array
   const newArr =  [].concat(arr);
   newArr.pop()
   return newArr
}
function multiplyBy2(arr){
    return arr.map(item => item*2)
}

const arr2 = removeLastItem(array);
const arr3 = multiplyBy2(array);
console.log(array, arr2, arr3)

// Referential Transparency
function a(num1, num2) {
    return num1 + num2
}

function b(num) {
    return num*2
}
b(a(3,4))
