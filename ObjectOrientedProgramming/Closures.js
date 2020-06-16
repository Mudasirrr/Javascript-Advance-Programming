// Closures and Prototypical Inheritance
const four = new Function('return 4')
// // functions are objects (discuss 'new' in object oriented programming ch)
// // functions can be passed around like data

console.log(four());

// functions are First Class Citizens in JAVASCRIPT (functions are data)

// 1 -> able to assign function as variables
var stuff = function() {}

// // 2 -> pass functions into arguments
function a(fn) {
    fn()
}

a(function () {
    console.log('hi there')
})
// // 3 -> able to return functions as values from other functions
function b() {
    return function c() {console.log('bye')}
}

var d = b()
d()

// default param
function a (param = 6) {
    return param
}

console.log(a())


// CLOSURES: functions + lexical scope
function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

console.log(a()()())

const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

const booString = boo('hi');

// 5 years
const booStringName = booString()

// CLOSURES

// Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill('Hello')
    console.log('created!')
    return bigArray[index]
}

console.log(heavyDuty(699));
console.log(heavyDuty(699));
console.log(heavyDuty(699));

const getHeavyDuty = heavyDuty2();
getHeavyDuty(544);
getHeavyDuty(222);
getHeavyDuty(534);


function heavyDuty2() {
    const bigArray = new Array(7000).fill('Hello')
    console.log('created Again!')
    return function(index) {
        return bigArray[index]
    }
}
// Encapsulation
const makeNuclearButton = () => {
    let timeWithouDestruction = 0;
    const passTime = () => timeWithouDestruction++;
    const totalPeaceTime = () => timeWithouDestruction;
    const launch = () => {
        timeWithouDestruction = -1;
        return 'BOOM';
    }
    setInterval(passTime, 1000)
    return {
        // launch,
        totalPeaceTime
        }
    }

    const ohno = makeNuclearButton();
    ohno.totalPeaceTime()

let view;
function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
            return;
        } else {
            view = 'MOUNTAIN';
            called++;
            console.log('view has been set!')
        }
    }

}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view)

const array = [1,2,3,4];
for (let i =0; i<array.length; i++){
    setTimeout(function() {
        console.log('I am at index ' + array[i])
    }, 3000)
}

// I am at index 1
// I am at index 2
// I am at index 3
// I am at index 4

const array = [1,2,3,4];

for (var i = 0; i < array.length; i++){
    (function(closureI){
        setTimeout(function() {
        console.log('I am at index ' + array[closureI])
    }, 3000)})(i)
}