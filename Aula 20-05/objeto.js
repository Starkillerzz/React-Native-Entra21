var carro = {
    placa: "abc-134",
    marca: "volkswagen",
    modelo: "gol",
    cor: "vermelho",
    autonomia: function(km, abastecimento){
        console.log(km/abastecimento)
    }


}

console.log(carro)
console.log(carro.placa)

carro.cor = "preto"

console.log(carro.cor)
carro.autonomia(500, 15)