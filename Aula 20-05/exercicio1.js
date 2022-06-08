var cerveja = {
    tipo: "antartica original",
    preco: 3.50,
    qtde: 3,
    
    total: function(){
        return (this.preco * this.qtde)
    }
    
}

var chocolate = {
    tipo: "Lacta",
    preco: 7.00,
    qtde: 2,

    total: function(){
        return (this.preco * this.qtde)
    }
}

var refrigerante = {
    tipo: "Coca-cola",
    preco: 9.00,
    qtde: 2,

    total: function(){
        return (this.preco * this.qtde)
    }
}
var macarrão = {
    tipo: "Renata Espagueti",
    preco: 2.50,
    qtde: 4,

    total: function(){
        return (this.preco * this.qtde)
    }
}
var molho = {
    tipo: "Pomarola",
    preco: 1.25,
    qtde: 5,

    total: function(){
        return (this.preco * this.qtde)
    }
}
var bolacha = {
    tipo: "Passatempo",
    preco: 3.69,
    qtde: 1,

    total: function(){
        return (this.preco * this.qtde)
    }
}
var carrinho = [cerveja, chocolate, refrigerante, macarrão, molho, bolacha]
var soma = 0
for(let i = 0; i < carrinho.length; i++){
    soma += carrinho[i].total()
}


console.log(soma)


