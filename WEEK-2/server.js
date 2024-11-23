const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Nabel Server!');
});
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }

    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});
// Subtraction route
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }

    const difference = num1 - num2;
    res.send(`The difference of ${num1} and ${num2} is ${difference}`);
});

// Multiplication route
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }

    const product = num1 * num2;
    res.send(`The product of ${num1} and ${num2} is ${product}`);
});

// Division route
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }

    if (num2 === 0) {
        return res.status(400).send('Division by zero is not allowed');
    }

    const quotient = num1 / num2;
    res.send(`The quotient of ${num1} and ${num2} is ${quotient}`);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
