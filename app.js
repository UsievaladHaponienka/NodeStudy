const fs = require('fs');

// throws error if dir already exists
fs.mkdir('tutorial', (err) => {
    if (err) {
        console.log(err)
    } else {
        fs.writeFile('tutorial/example.txt', 'Test content', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('File created!')
            }
        })
        console.log('Folder created!')
    }
})

//delete folder. works only for empty folders
// fs.unlink('./tutorial/example.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fs.rmdir('tutorial', (err) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log('Folder deleted!')
//             }
//         })
//     }
// })

fs.readdir('tutorial', (err, files) => {
    if(err) {
        console.log(err)
    } else {
        for (let file of files) {
            fs.unlink('./tutorial/' + file, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('File deleted')
                }
            })
        }

        fs.rmdir('tutorial', (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Folder deleted')
            }
        })
    }
})