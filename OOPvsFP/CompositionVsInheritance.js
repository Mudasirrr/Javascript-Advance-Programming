// Inheritance is a super class that is extended to smaller pieces that add or overwrite things
// what it is

// Fragile Base Class Problem -> changes all subclasses
// Hierarchy


/*
few operations on common data
stateful
side effect
imperative
*/

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
    // tight coupling problem (i.e. rippling effects to all of the subclass from parent class)
    sleep(){

    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon)
        console.log('what am I?', this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made!'
    }
}
const elf1 = new Elf('Shrek', 'club')
const houseElf = new Elf('Dolby', 'cloth', 'house')
houseElf.makeFort()

// Composition is smaller pieces to create something bigger (i.e. compose)
// what it has

/*
many operations on fixed data
stateless
pure
declarative
*/

function getAttack(character) {
    return Object.assign({}, character, {attackFn: () => {}})
}

function Elf(name, weapon, type){
    let elf = {
        name,
        weapon,
        type
    }
    return getAttack(elf)
}

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));
function purchaseItem(...fns) {
    return fns.reduce(compose)
}

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function addItemToCart(user, item){
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart})
}
