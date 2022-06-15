"use strict";
var Epessoa;
(function (Epessoa) {
    Epessoa[Epessoa["FISICA"] = 0] = "FISICA";
    Epessoa[Epessoa["JURIDICA"] = 1] = "JURIDICA";
})(Epessoa || (Epessoa = {}));
var cliente;
cliente = Epessoa.FISICA;
console.log(cliente);
var senac;
senac = Epessoa.JURIDICA;
console.log(senac);
