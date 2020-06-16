// ES6 Class
class Character {
    // #age = 54; // private data used for only this class
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

// Elf is a subclass of Character (superclass)
class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon); // must call 'super' to use super class and its properties
        console.log(this) // 'this' refers to the super class: 'Character' and it's properties
        this.type = type
    }
    // basic example of Polymorphism: method overriding for each 'class'
    attack(cry){
        return "attack with " + cry
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    // basic example of Polymorphism
    attack() {
        return "argghhhhhhhhh!"
    }
    makeFort() {
        return 'Strongest fort in the world made!'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby)
console.log(dolby.attack('weee')); // basic example of Polymorphism

const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek.attack()) // basic example of Polymorphism
console.log(shrek.makeFort())
// console.log(Ogre.prototype.isPrototypeOf(shrek)) // '.prototype' is needed to target the object
// console.log(Character.prototype.isPrototypeOf(Ogre.prototype))
console.log(dolby instanceof Elf) // simpler syntax use for checking prototypes
console.log(dolby instanceof Character)
// at the end of the day with Javascript we have objects inheriting from other objects