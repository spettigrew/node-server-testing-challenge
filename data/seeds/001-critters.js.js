
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("critters").truncate()
    
      await knex("critters").insert([
        { name: "George Mouse" },
        { name: "Lily Mouse" },
        { name: "Sophie Mouse" },
        { name: "Winston Mouse" },
        { name: "Hattie Frog" },
        { name: "Owen Snake" }
      ])
}