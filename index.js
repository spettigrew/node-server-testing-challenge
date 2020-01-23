const express = require("express")
const server = express()

const server = require("./server")

const port = process.env.PORT || 4000


if(!module.parent) {
  server.listen(port, () => {
    console.log(`Listening on port${PORT}...`)
    })
}