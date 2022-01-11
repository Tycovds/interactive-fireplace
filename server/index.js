const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
});

io.on("connection", (socket) => {
    socket.on("wood", (hostId) => {
        socket.to(hostId).emit("fire");
    });
})

httpServer.listen(5050, "192.168.1.23", () => {
    console.log('Server running...')
});