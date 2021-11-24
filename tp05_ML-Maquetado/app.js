const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

const port = 3000;
const views = path.join(__dirname, "views");

app.listen(port, () => console.log(`Corriendo Servidor en puerto: ${port}`));

app.get("/", (req, res) => res.sendFile(path.join(views, "home.html")));
