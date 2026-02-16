const fs = require('fs')

fs.readFile('ReadAndWriteFile/a.txt', 'utf-8', (err, data) => { 
    if(err){ 
        console.log("error reading file", err.message)
    }
    else{
        console.log(data) 
        let cleanedData = data
        .replace(/\s+/g, ' ')
        .trim()
        console.log(cleanedData)
    
    
    fs.writeFile('ReadAndWriteFile/a.txt', cleanedData, (err) => { 
        if(err){ 
            console.log("error reading file", err.message) 
        }
        else{ 
            console.log('Succefully written the text')
        }
    })
}
})

