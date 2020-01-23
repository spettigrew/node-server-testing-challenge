const express = require('express');

const server = express();

server.use(express.json())

server.use((err, req, res, next) => {
    console.log("Error:", err)
    
    return res.status(500).json({ message: "Something is wrong." ,})
})

server.get('/', (req, res) => {
    return res.status(200).json({ api: 'running' });
});

module.exports = server;