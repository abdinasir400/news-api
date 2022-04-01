const db = require("../db/connection");
const seed =require("../db/seeds/seed");
const testData = require("../db/data/test-data/index.js");
const request = require("supertest")
const {app} = require("../app")
const {expect, test} = require("@jest/globals")

afterAll(()=>{
    db.end();
});
beforeEach(()=> seed(testData));

describe("GET api/topics",()=>{
    test("return 200 status code and array of topics", ()=> {
        return request(app)
            .get("/api/topics")
            .expect(200)
            .then((res)=>{
                expect(res.body.topics).toBeInstanceOf(Array)
                expect(res.body.topics.length).toBe(3)
                res.body.topics.forEach((topic)=>{
                    expect(topic).toMatchObject({
                        slug: expect.any(String),
                        description: expect.any(String)
                    })

                })
            })
    })

    test("404: path not found", ()=> {
        return request(app)
            .get("/api/tpic")
            .expect(404)
            .then(({body})=>{
                expect(body.msg).toBe('path not found')
            })
    }) 
})