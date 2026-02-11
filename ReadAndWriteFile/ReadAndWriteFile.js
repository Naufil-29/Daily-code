const fs = require('fs')

fs.readFile('ReadAndWriteFile/a.txt', 'utf-8', (err, data) => { 
    if(err){ 
        console.log("error reading file", err.message)
    }
    else{ 
        console.log("a.txt's content", data)
    }
})

fs.writeFile('ReadAndWriteFile/a.txt', 'hello bhosdike tera baap', (err) => { 
    if(err){ 
       console.log("error reading file", err.message) 
    }
    else{ 
        console.log('Succefully written the text')
    }
})

