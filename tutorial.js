const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject {
    constructor() {
        console.log('Object created')
    }
}

//Make  functions visible
module.exports = {sum, PI, SomeMathObject}