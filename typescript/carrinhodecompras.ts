interface Compras {
    id: number
    item: string
    quantidade: number
    preco: number
}


var carrinho: Compras ={id: 0, item: "", quantidade: 0, preco: 0}

carrinho.id = 1
carrinho.item = "Feijão"
carrinho.quantidade = 2
carrinho.preco = 7.5

console.log(carrinho)


