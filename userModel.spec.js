const db = require("./data/db.config")

const User = require("./users/user-model")

describe("user model", () => {
    beforeEach(async () => {
        await db("users").truncate()
    })

    describe("insert function", () => {
        it("inserts users into the db", async () => {
            let usersNumber
            usersNumber = await db("users")
            expect(usersNumber).toHaveLength(0)
            await User.insert({ name: "SaraP"})
            await User.insert({ name: "spetti" })
            usersNumber = await db("users")
            expect(usersNumber).toHaveLength(2)

        })

        it("inserts the provided user into the db", async () => {
           let user = await User.insert({ name: "Sara" }) 
           expect(user.name).toBe("Sara")
        })
    })
})