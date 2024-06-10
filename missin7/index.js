const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 1111;

// Hardcoded credentials
const validUsername = 'ibrahim';
const validPassword = 'ibrahim11';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        if (!parsedUrl.query.username || !parsedUrl.query.password) {
            fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Error loading page');
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
                }
            });
        } else {
            const username = parsedUrl.query.username;
            const password = parsedUrl.query.password;

            if (username === validUsername && password === validPassword) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Login successful!');
            } else {
                res.statusCode = 401;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Login failed: Invalid username or password.');
            }
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
