const fs = require('fs')

const ReadStream = fs.createReadStream('./docs/blog1.txt')
const writeStream = fs.createWriteStream('./docs/blog4.txt')


ReadStream.on('data', (chunk) => {
    console.log('----NEW CHUNK-----')
    console.log(chunk.toString())
    writeStream.write('\n NEW LINE\n')
    writeStream.write(chunk)
})

//PIPING

ReadStream.pipe(writeStream)