var numeros = [10, 5, 50, 60, 800, 15, -1]
var ordem = numeros[0]
var teste = 0

/*for(let i = 0; i < numeros.length; i++){
    if(ordem < numeros[i]){
        ordem = numeros[i]
        teste = ordem
        numeros.splice(numero[i], 1)
        numeros.slice(numero[i], 0)

          
    }
}

console.log(numeros)*/
var trocou = true
while(trocou){
    trocou = false
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > numeros[i+1]){
            let aux = numeros[i]
            numeros[i] = numeros[i+1]
            numeros[i+1] = aux
            trocou = true
        }
    }
}


console.log(numeros.toString())