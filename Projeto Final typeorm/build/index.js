"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var usuarios_1 = require("./usuarios");
var tipos_1 = require("./tipos");
var app = express();
app.use(express.json());
app.use('/usuarios', usuarios_1.default);
app.use('/tipos', tipos_1.default);
/*app.use('/estabelecimento', estabelecimento)*/
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("executando em http://localhost:".concat(PORT)); });
