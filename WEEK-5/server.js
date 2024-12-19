const express = require('express');
const path = require('path');
const router = require('./Router/router');
const app = express();

app.use(express.static(path.join(__dirname, 'View')));
app.use(express.json());
app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
