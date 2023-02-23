const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', function (num1, num2) {
//     console.log(num1 + num2)
// })
//
// eventEmitter.emit('tutorial', 1, 2);


class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name
    }

    get name() {
        return this._name
    }
}

//Create new object instance
let pedro = new Person('Pedro');
let christina = new Person('Christina');

//Assign event with name `name`
pedro.on('name', function () {
    console.log('My name is ' + pedro.name)
})

christina.on('name', function () {
    console.log('My name is ' + christina.name)
})

//Emit `name` event
pedro.emit('name');
christina.emit('name');

