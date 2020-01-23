const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.status(200).json({ api: 'running' });
});

module.exports = server;