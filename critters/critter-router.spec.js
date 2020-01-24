const supertest = require("supertest")
const server = require('../critters/critter-router')
const db = require("../data/db.config")

beforeEach(async () => {
    await db.seed.run()
})

test("welcome route", async () => {
    const res = await supertest(server).get("/")
    // console.log(res)

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to Pine Needle Grove!")
})

test("get critter list", async () => {
    const res = await supertest(server).get("/critters")
    expect (res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0].id).toBe(1)
    expect(res.body[0].name).toBe("George Mouse")
})

test("create critter route", async () => {
    const res = await supertest(server)
    .post("/critters")
    .send({ name: "Mrs. Wise" })

    expect(res.status).toBe(201)
    expect(res.type).toBBe("application/json")
    expect(res.body).toEqual({ id: 7, name: "Mrs. Wise" })
})




// Integration test - supertest/endpoint test. Status code.

// Notes for post endpoint integration test.