myArray = [1,2,3,4]
// es6
newArr = ["start", ...myArray, "end"]
console.log(newArr)

// how do you create a private variable in JS?
function secretVariable() {
    var private = 'super secret code';
    return function (){
        return private
    }
}

var getPrivateVariable = secretVariable()
console.log(getPrivateVariable())

// what is the output?

// irrelevant since inner function overwrites this value with 3
var num = 4;
function outer(){
// irrelevant as well since inner function has its own num
    var num = 2
    function inner() {
        num++; // undefined since num = 2 is outside function
        var num = 3;
        console.log(num)
        // runs num = 3 into console.log
    }
    // runs when outer() is called
    inner();
}
// runs inner() when it is called
outer();


// what is the output?

console.log(typeof (typeof 1))
// converts typeof 1 into 'number' and then string when called again

// what is the output?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function() {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// FILTER

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word => word.length > 6 );
console.log(longWords) // exuberant, destruction, present

// MAP

var numbers = [1, 4, 5, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 2.24606, 3]
// numbers is still [1, 4, 5, 9]
console.log(roots)

// REDUCE

const reduce = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
}, 0);

console.log(reduce)

// .forEach() -> great for for loop use

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
    copy.push(item)
});

// .some() or .every() which returns true if everything is true
function isBiggerThan10(element, index, array) {
    return element > 10;
}

const check = [2, 5, 8, 1, 4].some(isBiggerThan10); // false
const check2 = [12, 4, 3, 2, 1].some(isBiggerThan10); // true
console.log(check, check2)

// Object.values(), Object.keys(), Object.entries()

// array like object
var obj = {0: 'a', 1: 'b', 2: 'c'};
console.log(Object.keys(obj)); // console: ['0', '1', '2']

var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

var obj = { foo: 'bar', baz: 42} ;
console.log(Object.entries(obj)); // [ [ 'foo', 'bar' ], [ 'baz', 42] ]

// n kids are sitting in a circle
// k toys available to distribute
// i position to start from

// 3, 5, 1 => 2

const getLK = (n , k, i) => {
    if( k > n) {
        return i + (k%n) - 1;
    } else {
        return i+n -1;
    }
}

console.log('Solution: ', getLK(3, 5, 1))