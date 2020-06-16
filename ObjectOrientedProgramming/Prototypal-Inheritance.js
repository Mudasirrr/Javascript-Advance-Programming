// PROTOTYPAL INHERITANCE
let dragon = {
    name: "Susan",
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}
// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())
lizard.__proto__ = dragon;
console.log(lizard.sing())
// console.log(dragon.isPrototypeOf(lizard))

for (let prop in lizard){
    if (lizard.hasOwnProperty(prop)){ // checks own properties from lizard (not the inherited ones)
        console.log(prop)
    }
    // console.log(properties)
}

// __proto__ generally isn't used due to it's performance issues in JS compilers (OOP)


const obj = {name: 'Sally'}
console.log(obj.hasOwnProperty('name')) // true

let human = {
    mortal: true
}

let socrates = Object.create(human)
socrates.age = 70;
console.log(socrates.mortal)
console.log(socrates.age)
console.log(human.isPrototypeOf(socrates))

// EXERCISE - extend the functionality of a built in object

// #1
// Date object => to have new method .lastYear()
// which shows you last year 'YYYY' format.

Date.prototype.lastYear = function() {
    return console.log(this.getFullYear() - 1);
}
new Date().lastYear()
'1899'

// #Bonus
// Modify .map() to print 'map emoji' at the end of each item.

Array.prototype.map = function() {
    let arr = [];
    for (let i = 0; i<this.length; i++){
        arr.push((this[i] + ' map emoji'))
    }
    return arr
}

console.log([1,2,3].map())
console.log([1,2,3].map())
// 1'map emoji', 2'map emoji', 3'map emoji'