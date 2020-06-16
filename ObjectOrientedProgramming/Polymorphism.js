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
    attack(cry) {
        return 'attack with ' + cry;
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
    attack() {
        return 'arggghhhh'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
const Shrek = new Ogre('Shrek', 'club', 'green');

console.log(dolby.attack('weee'));
console.log(Shrek.attack());