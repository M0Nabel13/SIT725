const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../Router/router'); 
chai.use(chaiHttp);

const { expect } = chai;

let tasks = []; 

describe('Task API Tests', () => {
    beforeEach(async () => {
        
        await chai.request(app).post('/api/reset');
    });

    describe('GET /api/tasks', () => {
        it('should return a list of tasks with status 200', async () => {
            const response = await chai.request(app).get('/api/tasks');
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.an('array');
        });
    });

    describe('POST /api/tasks', () => {
        it('should add a new task and return it with status 201', async () => {
            const newTask = { description: 'Test task' };
            const response = await chai.request(app).post('/api/tasks').send(newTask);
            expect(response.status).to.be.equal(201);
            expect(response.body).to.have.property('description', 'Test task');
        });
    });

    describe('POST /api/tasks - Prevent Duplicates', () => {
        it('should not allow duplicate tasks to be added', async () => {
            const task = { description: 'Unique Task' };

            
            const firstResponse = await chai.request(app).post('/api/tasks').send(task);
            expect(firstResponse.status).to.be.equal(201);

            
            const secondResponse = await chai.request(app).post('/api/tasks').send(task);
            expect(secondResponse.status).to.be.equal(400);
            expect(secondResponse.body).to.have.property('error', 'Task already exists');
        });
    });

    describe('POST /api/tasks - Invalid Input', () => {
        it('should return status 400 for invalid input', async () => {
            const invalidTask = {};
            const response = await chai.request(app).post('/api/tasks').send(invalidTask);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.have.property('error', 'Invalid task data');
        });
    });

    describe('DELETE /api/tasks/:index - Invalid Index', () => {
        it('should return status 400 for invalid index', async () => {
            const response = await chai.request(app).delete('/api/tasks/999');
            expect(response.status).to.be.equal(400);
            expect(response.body).to.have.property('error', 'Invalid task index');
        });
    });
});
