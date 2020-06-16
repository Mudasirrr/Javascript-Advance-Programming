// no side effects
// input --> output

const array = [1,2,3]

function mutateArr(arr){
    arr.pop()
}

function mutateArr2(arr){
    arr.forEach(item => {
        arr.push(1)
    })
}

mutateArr(array); // [1, 2]
mutateArr2(array); // [ 1 ]
console.log(array)