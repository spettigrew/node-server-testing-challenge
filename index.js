// const express = require("express")
// const server = express()

const server = require("./server")

const PORT = process.env.PORT || 4000


if(!module.parent) {
  server.listen(PORT, () => {
    console.log(`Listening on port${PORT}...`)
    })
}

// With server exported, do I need a separate server file?