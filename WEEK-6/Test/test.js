const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const { expect } = chai;

chai.use(chaiHttp);

describe("Task Manager API", function () {
    it("should return status 200 and an array on GET /api/tasks", function (done) {
        chai.request(server)
            .get("/api/tasks")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });
    });

    it("should return status 201 and the new task on POST /api/tasks", function (done) {
        const newTask = { name: "Test Task", details: "This is a test" };
        chai.request(server)
            .post("/api/tasks")
            .send(newTask)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.include.keys("message", "task");
                expect(res.body.task).to.deep.include(newTask);
                done();
            });
    });

    it("should return status 200 and confirm task deletion on DELETE /api/tasks/:index", function (done) {
        const newTask = { name: "Task to delete", details: "Delete this task" };

        // Add the task first
        chai.request(server)
            .post("/api/tasks")
            .send(newTask)
            .end(() => {
                // Delete the task at index 0
                chai.request(server)
                    .delete("/api/tasks/0")
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property("message", "Task deleted");
                        done();
                    });
            });
    });
});
