const express = require("express")
const crittersModel = require("../critters/critter-model")

const server = express()


server.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to Pine Needle Grove!", })
})

server.get("/critters", async (req, res, next) => {
    try {
        const critters = await crittersModel.list()
        return res.status(200).json(critters)

    } catch (err) {
        next(err)
    }
})

server.post("/critters", async (req, res, next) => {
    try {
        const critter = await crittersModel.insert(req.body)
        return res.status(201).json(critter)

    } catch (err) {
        next(err)
    }
})

module.exports = server