// Object Oriented Programming Review

// Object.create()
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
// Factory Functions - function that creates object for us
function createElf(name, weapon) {

        let newElf = Object.create(elfFunctions)
        newElf.name = name;
        newElf.weapon = weapon;

        return newElf;
}

const peter = createElf('Peter', 'stones')
peter.attack = elfFunctions.attack
console.log(peter.attack())
const sam = createElf('Sam', 'FIREEE')
sam.attack = elfFunctions.attack
console.log(sam.attack())


// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     // attack() {
//     //     return 'attack with ' + elf.weapon
//     // }
// }

// const elf2 = {
//     name: 'Sammy',
//     weapon: 'bow',
//     // attack() {
//     //     return 'attack with ' + elf2.weapon
//     // }
// }

// console.log(elf.attack())
// console.log(elf2.attack())