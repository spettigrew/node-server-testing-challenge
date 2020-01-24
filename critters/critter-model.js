const db = require('../data/db.config')

function list() {
    return db("critters")
}

function findById(id) {
    return db("critters")
    .where({ id })
    .first()
}

async function insert(critter) {
    const [id] = await db("critters").insert(critter)
    return findById(id)
}

async function update(id, changes) {
    await db("critters")
    .where({ id })
    .update(changes)

    return findById(id)
}

function remove(id) {
    return db ("critters")
    .where({ id })
    .del()
}

module.exports = {
    list,
    findById,
    insert,
    update,
    remove,
}