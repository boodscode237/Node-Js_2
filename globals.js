const fs = require('fs');

// Read files

fs.readFile('./docs/blog1.txt',(err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

// Write file

fs.writeFile('./docs/blog2.txt', 'Hello World', () => {
    console.log('File was written')
})

console.log('Last line')


// Directory
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', () => {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('Folder deleted');
    })
}


// delete file

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log("fille deleted");
    })
}
