// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write('<h1>Home Page</h1>');
//         res.end();
//     } else if(req.url === '/about'){
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write('<h1>we are on About Page</h1>');
//         res.end();
//     } else if(req.url === '/contact'){
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write('<h1>Contact Page</h1>');
//         res.end();
//     } else {
//         res.writeHead(404, {'content-type': 'text/html'});
//         res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
//         res.end();
//     }
// })

// server.listen(5000, () => {
//     console.log('Server listening at port 5000');
// })


const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello From Home Page');
});

app.get('/about', (req, res) => {
    res.send('Hello From About Page');
});

app.listen(8000, () => {
    console.log('Server listening at port 8000');
});