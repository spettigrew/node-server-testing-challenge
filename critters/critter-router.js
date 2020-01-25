const express = require("express")
const crittersModel = require("../critters/critter-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const critters = await crittersModel.list()
        return res.status(200).json(critters)

    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const critter = await crittersModel.insert(req.body)
        return res.status(201).json(critter)

    } catch (err) {
        next(err)
    }
})

module.exports = router