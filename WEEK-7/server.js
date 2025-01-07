const express = require("express");
const path = require("path");
const router = require("./Router/router");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "View")));
app.use(express.json());
app.use("/api", router);

const PORT = 3000;

io.on("connection", (socket) => {
    console.log("User connected");

    setInterval(() => {
        const randomNum = Math.floor(Math.random() * 100);
        socket.emit("number", randomNum);
        console.log("Emitted number:", randomNum);
    }, 1000);

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

httpServer.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = httpServer;
