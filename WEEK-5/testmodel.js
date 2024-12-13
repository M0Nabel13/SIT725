// testModel.js
const model = require('./Model/data').default;

// Add tasks
model.addTask('Task 1');
model.addTask('Task 2');


console.log(model.getTasks()); //
