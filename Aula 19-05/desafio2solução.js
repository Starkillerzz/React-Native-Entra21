function soma(lista){
    var total = 0
    for(let i=0 ; i < lista.length; i++){
        total = total + lista[i]
    }
    return total
}

var retorno = soma([1 , 2 , 3, 4, 5, 6])
console.log(retorno)

var numeros = [10, 20, 30, 40]
console.log(soma(numeros))