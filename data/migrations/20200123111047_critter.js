
exports.up = async (knex) => {
    await knex.schema.createTable("critters", (table) => {
        table.increments()
        table.string("name", 150).notNullable()
    })
}

exports.down = async (knex) => {
    // undo the operation in up
    await knex.schema.dropTableIfExists("critters")
}