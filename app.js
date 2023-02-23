const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`, function (userInput) {
    // Set message for incorrect answer
    rl.setPrompt('Incorrect response, try again \n');
    if (userInput.trim() != answer) {
        //print message for incorrect answer
        rl.prompt();
    } else {
        // close if correct
        rl.close();
    }
    // This event is triggered when our app writes line in console, i.e. triggered by rl.prompt() method call
    rl.on('line', (userInput) => {
        if (userInput.trim() == answer) {
            // close if correct
            rl.close()
        } else {
            // rl.prompt writes line to console and triggers event 'line' which leads to infinite loop (that's what we want)
            rl.prompt()
        }
    })
});

// event triggered when rl.close method is called.
rl.on('close', function () {
    console.log('Correct!');
});