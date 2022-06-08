let nota1, nota2, nota3
let nome = "Ruan"
let media

nota1 = 4
nota2 = 6
nota3 = 10

media = (nota1+nota2+nota3)/3

if(media >= 7){
    console.log(`${nome}, sua média é: ${media.toFixed(2)}. Aprovado!`)
}

if(media < 7){
    console.log(`${nome}, sua média é: ${media.toFixed(2)}. Reprovado!`)
}