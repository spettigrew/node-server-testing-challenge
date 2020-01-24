const db = require("../data/db.config")
const critterModel = require("./critter-model")

// runs seeds before test. Fresh start to testing each function.
beforeEach(async () => {
    await db.seed.run()
})

describe("critters model", () => {
    test("list", async () => {
        const res = await critterModel.list()
        expect(res).toHaveLength(6)
    })
})

describe("critters model", () => {
    test("findById", async () => {
        const res = await critterModel.findById(1)
        expect(res.name).toBe("George Mouse")
    })

    test("insert", async () => {
        await critterModel.insert({ name: "Lydie Frog"})
        const critters = await db("critters").select()
        expect(critters).toHaveLength(7)
    })

    test("update", async () => {
        await critterModel.update(1, { name: "Sophie Mouse" })
        const critter = await critterModel.findById(1)
        expect(critter.name).toBe("Sophie Mouse")
    })

    test("remove", async() => {
        await critterModel.remove(1)
        const critters = await critterModel.list()
        expect(critters).toHaveLength(5)
        console.log(critters)
    })
})

// Unit tests that are calling functions.