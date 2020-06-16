
// HIGHER ORDER FUNCTIONS
// DRY principle (DO NOT REUSE/REPEAT)

const giveAccessTo = (name) => console.log('Access Granted to ' + name);

function authenticate (verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return true;
}

function sing(person){
    return console.log('asdfasdfasdfasdf ' + person.name);
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        fn(person)
    } else if (person.level === 'user') {
        fn(person)
    }
    // return giveAccessTo(person.name)
}

letPerson({level: 'admin', name: 'Tim'}, sing)

const multiplyBy = (num1) => (num2) => console.log(num1*num2)

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

multiplyByTwo(4)
multiplyByTwo(10)
multiplyByFive(6)
multiplyBy(4)(33)