import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {Server} from "socket.io";

import http from 'http';

const app = express();
const httpServer = http.createServer(app);

const port = 3000;

const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
});

io.on("connection", (socket) => {
    console.log(`A user connected. Socket id: ${socket.id}`);

    socket.on("message", (data) => {
        io.emit("data", data)
    });

    // socket.on("mouse", (e) => {
    //     io.emit("mouseM", e);
    //     console.log(e);
    // })
});

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log(`Un utilisateur s'est connecté`);
    res.json({msg: "Hello world"});
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

httpServer.listen(port, () => {
    console.log(`Le serveur écoute sur ${port}`);
});