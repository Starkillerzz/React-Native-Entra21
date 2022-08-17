"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var usuarios_1 = require("./usuarios");
var RotasCarros_1 = require("./RotasCarros");
/* NÃO PRECISA USAR DATASOURCE AQUI PORQUE TEM NAS ROTAS
    dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })*/
var app = express();
app.use(express.json());
app.use('/users', usuarios_1.default);
app.use('/carros', RotasCarros_1.default);
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("executando em http://localhost:".concat(PORT)); });
