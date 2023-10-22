const {app, server} = require('../app.js')
const request= require('supertest')


describe("API /todos", () => {
    it("GET /todos", (done) => {
        request(app)
          .get("/todos")
          .expect(200)
          .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe("GRWM: Morning Edition")
            done()
            })
            .catch(done)
    })

    it("GET /todos/:id", (done) => {
        request(app)
          .get("/todos/1")
          .expect(200)
          .then(response => {
            const data = response.body
            expect(data.title).toBe("GRWM: Morning Edition")
            expect(data.status).toBe("active")
            done()
            })
            .catch(done)
    })

    it("POST /todos", (done) => {
        request(app)
          .post("/todos")
          .send({
            title: "Dinner",
            status: "active"
          })
          .expect(200)
          .then(response => {
            const data = response.body
            expect(data.title).toBe("Dinner")
            expect(data.status).toBe("active")
            done()
            })
            .catch(done)
    })

    it("PUT /todos/:id", (done) => {
        request(app)
          .put("/todos/2")
          .send({
            title: "My Skincare Routine",
            status: "inactive"
          })
          .expect(200)
          .timeout(10000)
          .then(response => {
            const data = response.body
            expect(data.title).toBe("My Skincare Routine")
            expect(data.status).toBe("inactive")
            done()
          })
          .catch(done)
    })

    it("Soft delete", (done) => {
        request(app)
          .delete("/todos/3")
          .expect(200)
          .then(response => {
            const data = response.body
            expect(data.message).toBe("Title deleted successfully")
            done()
          })
          .catch(done)
    })

})

afterAll(done => {
    server.close()
    done()
})

