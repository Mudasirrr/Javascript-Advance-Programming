// Factory Functions - fn that creates object for us

const elfFunctions = {
    attack() {
        return this.name + " attacks with " + this.weapon + "!"
    }
}

const createElf = (name, weapon) => {
    let newElf = Object.create(elfFunctions)
    // console.log(newElf.__proto__) -> use this to check Object's prototype chain
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const david = createElf('David', 'fire')
// david.attack = elfFunctions.attack (using Object.create() is more efficient)
console.log(david.attack())

const Sam = createElf('Sam', 'iceblast')
// Sam.attack = elfFunctions.attack
console.log(Sam.attack())