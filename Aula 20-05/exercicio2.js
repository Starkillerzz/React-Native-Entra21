var numero = [100 ,100 ,40 ,4 ,10 , 1, 10] //mostra o menor numero no array
var menor = numero[0]
var maior = numero[0]
for(let i = 0 ; i < numero.length; i++){
        if(menor > numero [i])
            menor = numero[i]

        if(maior < numero [i])
            maior = numero[i]
}
console.log(menor)
console.log(maior)
