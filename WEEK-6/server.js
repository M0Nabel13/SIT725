const express = require("express");
const path = require("path");
const router = require("./Router/router");
const app = express();

app.use(express.static(path.join(__dirname, "View")));
app.use(express.json());
app.use("/api", router);

const PORT = 3000;

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = server; // Export the server instance for testing
