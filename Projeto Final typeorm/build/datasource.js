"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Estabelecimentos_1 = require("./entity/Estabelecimentos");
var Tipos_1 = require("./entity/Tipos");
var Usuarios_1 = require("./entity/Usuarios");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Usuarios_1.Usuarios, Tipos_1.Tipos, Estabelecimentos_1.Estabelecimentos],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
