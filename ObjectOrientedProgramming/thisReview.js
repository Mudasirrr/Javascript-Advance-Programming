// new binding this
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person('David', 29)
console.log(person1)

// implicit binding
const person = {
    name: 'Karen',
    age: 27,
    hi() {
        console.log('hi' + this.name)
    }
}

// explicit binding
const person3 = {
    name: 'James',
    age: 39,
    hi: function() {
        console.log('hi ' + this.setTimeout)
    }
    // .bind(window) -> used in browser console which returns 'setTimeout() { [native code] }'
}
person3.hi()

// arrow function
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
// lexical scoping from big arrow function inside function allows 'this' to reference current obj instead of window obj
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner()
    }
}

person4.hi()