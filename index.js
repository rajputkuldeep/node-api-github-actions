'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (_, res) => {
    res.send('<html> <head>server Response🙂</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>');
});

const server = app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});