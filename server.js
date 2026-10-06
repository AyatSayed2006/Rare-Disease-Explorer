const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    // Parse URL and strip query string
    let parsedUrl = req.url.split('?')[0];
    if (parsedUrl === '/') {
        parsedUrl = '/index.html';
    }

    let filePath = path.join(BASE_DIR, decodeURIComponent(parsedUrl));

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // If file not found, try appending .html or return 404
            let htmlFallback = filePath + '.html';
            if (fs.existsSync(htmlFallback) && fs.statSync(htmlFallback).isFile()) {
                filePath = htmlFallback;
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
                res.end(`<h1>404 Not Found</h1><p>The requested file <code>${parsedUrl}</code> does not exist.</p><p><a href="/index.html">Back to Home</a></p>`);
                return;
            }
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (readErr, content) => {
            if (readErr) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Origin': '*'
            });
            res.end(content);
        });
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
    console.log(`Local network: http://127.0.0.1:${PORT}`);
});
