const http = require('http');
const fs = require('fs')
const path = require("path");

const PORT = 3000;

const server = http.createServer((req,res)=>{
    console.log('Server request');

    res.setHeader('Context-Type','text/html')
});

//listen server


server.listeners(PORT, 'localhost', (error)=>{
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});