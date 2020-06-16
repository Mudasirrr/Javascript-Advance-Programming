// ES6 Class
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
// method
    attack() {
        return 'attack with ' + this.weapon;
    }
}
// new keyword represents instantiation of a 'Class' which creates a new object
// everytime new keyword is instantiated the constructor function is run to grab 'new name, weapon' except 'attack' since it is outside constructor also saves memory space
const david = new Elf('David', 'BOMBS')
console.log(david.attack())
console.log(david instanceof Elf)

/*

In Object Oriented Programming, ideally, everything should be contained within an object (i.e. a Class containing methods, properties, state, actions in one location).
An instance happens when we call Class and creates an object (instanceof Elf checks whether or not there is a Class).

Underneath the hood, we're still using Prototypal Inheritance as classes are syntactical sugar in JS unlike other languages.


*/

// SIDE NOTE: with Object.create() you are able to create Classes without use of 'this' but Class is more often used