"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var typeorm_1 = require("typeorm");
var Categoria_1 = require("./Categoria");
var Produto = /** @class */ (function () {
    function Produto() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Produto.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Produto.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Produto.prototype, "preco", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Produto.prototype, "estoque", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Categoria_1.Categoria; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_categoria' }),
        __metadata("design:type", Categoria_1.Categoria)
    ], Produto.prototype, "profile", void 0);
    Produto = __decorate([
        (0, typeorm_1.Entity)("tb_produto")
    ], Produto);
    return Produto;
}());
exports.Produto = Produto;
