const express = require("express");
const app = express();
const usuario = require("./Rotas/usuario");
const notas = require("./Rotas/notas");

app.use(express.json());

app.get("/inicio", function (req, res) {
    res.send("Olá");
});

app.use("/usuario", usuario);
app.use("/notas", notas);

app.listen(3000, function () {
    console.log("Aplicação rodando");
});
