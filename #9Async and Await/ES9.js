// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 55
}

const array = [1,2,3,4,5];
function sum (a, b, c, d, e) {
    return a + b + c + d + e;
}
// es6
// console.log(sum(...array))

// es9 (2018) '...rest'
function objectSpread(p1, p2, p3) {
    console.log(p1) // represents value of 'tiger'
    console.log(p2) // represents value of 'lion'
    console.log(p3) // represents value of 'rest' -> (monkey, bird)
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);
// console.log("Rest of the objects: ", rest)
// console.log("Tiger count: ", tiger)