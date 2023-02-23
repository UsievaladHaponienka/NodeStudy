const fs = require('fs');

//create a file
fs.writeFile('example.txt', 'This is an example', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('file created!')

        // rename file
        fs.rename('example.txt', 'example2.txt', (err) => {
           if (err) {
               console.log(err)
           } else {
               console.log('file renamed!')
           }
        });

        // append data to file
        fs.appendFile('example2.txt', '\nThis is appended part', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('file appended!')
            }
        })

        // read file
        fs.readFile('example2.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err)
            } else {
                console.log(file)
            }
        })

        fs.unlink('example2.txt', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('file deleted!')
            }
        })
    }
})


