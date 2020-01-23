
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("critters").truncate()
    
      await knex("critters").insert([
        { id: 1, name: "George Mouse" },
        { id: 2, name: "Lily Mouse" },
        { id: 3, name: "Sophie Mouse" },
        { id: 4, name: "Winston Mouse" },
        { id: 5, name: "Hattie Frog" },
        { id: 6, name: "Owen Snake" }
      ])
}