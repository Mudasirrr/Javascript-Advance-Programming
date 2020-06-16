// const fiona = new Elf('Fiona', 'ninja stars');

// const ogre = {...fiona} // spread operator copies 'fiona'
// console.log(ogre) // ogre.__proto__ returns '{}' while fiona.__proto__ returns 'Elf {}'
class Character {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}
// Character represents baseclass or superclass while Elf subclass using extends to grab properties
class Elf extends Character {
    constructor(name, weapon, type){
// super calls Character (superclass)
    super(name, weapon);
        this.type = type
// console.log(this): Elf { name: 'Fiona', weapon: 'ninja stars', type: 'princess' }
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
// console.log(this): Ogre { name: 'Shrek', weapon: 'club', color: 'green' }
    }
    makeFort() {
        return 'strongest fort in the world made';
    }
}

const fiona = new Elf('Fiona', 'ninja stars', 'princess')
console.log(fiona.attack())

const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek.makeFort())

console.log(Ogre.prototype.isPrototypeOf(shrek))
// checks to see if shrek belongs to Ogre -> true
console.log(Character.prototype.isPrototypeOf(Ogre))
// false
console.log(Character.prototype.isPrototypeOf(Ogre.prototype))
// true

console.log(fiona instanceof Elf)
// true
console.log(fiona instanceof Character)
// true
console.log(fiona instanceof Ogre)
// false

/*
    - Extends links up the prototype chain (prototypal inheritance).
    - Unlike Java, Javascript references the classes and not copies so there is a bit of memory efficiency.
    - '_' (underscore) references a private method (Java has this method built-in, JS can use weakmaps but newer proposal is in the works as part of ECMAScript)
*/