// Native es6 Modules
const harry = "potter"
const voldemort = "He who must not be named"

export function jump() {
    console.log('JUMPP!!!!')
}
// 'export' gives access to function
// 'export default' gives access to fn in index.html without the '{}' since it is the default fn
export default function fight(char1, char2) {
    const attack1 = Math.floor(Math.random() * char1.length);
    const attack2 = Math.floor(Math.random() * char2.length);
    console.log(attack1)
    return attack1 > attack2 ? `${char1} wins`: `${char2} wins`
}
