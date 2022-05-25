const http = require('http');
const fs = require('fs')
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server request');

    res.setHeader('Content-Type', 'text/html')

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

    let basePath = '';

    switch (req.url) {
        case '/':
            basePath = createPath('index');
            break;
        case '/constacts':
            basePath = createPath('constacts');
            break;
        default:
            basePath = createPath('error');
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })


});

//listen server


server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});