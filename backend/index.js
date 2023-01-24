import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const port = 3000;

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

app.listen(port, () => {
    console.log(`Le serveur écoute sur ${port}`);
});