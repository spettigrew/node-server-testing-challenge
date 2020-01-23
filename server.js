const express = require('express');

const critterRouter = require("./critters/critter-router")

const server = express();

server.use(express.json())

require("dotenv").config()

server.use("/critters", critterRouter)

server.get('/', (req, res) => {
    return res.status(200).json({ api: 'running' });
});

server.use((err, req, res, next) => {
    console.log("Error:", err)
    
    return res.status(500).json({ message: "Something is wrong." ,})
})

module.exports = server;