const http = require('http')
const fs = require('fs')

const _ = require('lodash')

const PORT = 3000

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 25)
    console.log(num)

    const greet = _.once(() => {
        console.log('Hello')
    })

    greet()
    greet()

    // set header content type
    res.setHeader('Content-Type', 'text/html')
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>hello, bros</p>')
    // res.write('<p>hello, bratans</p>')
    // res.end();

    let path = './views/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-me':
            res.statusCode = 301
            res.setHeader('location', '/about')
            res.end()
            break;
        default:
            path += '404.html';
            res.statusCode = 400
            break;
    }
    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(PORT, 'localhost', () => {
    console.log(`listening on port ${PORT}`)
})