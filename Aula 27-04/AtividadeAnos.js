let diaatual, dianascimento
let mesatual, mesnascimento
let anonascimento, ano
let nome = "Ruan"

diaatual = 26
dianascimento = 4

mesatual = 4  
mesnascimento  = 5

anonascimento = 1998
ano = 2022  

if(mesnascimento < mesatual){
    console.log(`${nome}, você tem ${ano - anonascimento} anos de idade`)

    }

if(mesnascimento == mesatual){
    if(dianascimento > diaatual){
        console.log(`${nome}, você tem ${(ano - anonascimento) - 1} anos de idade`)
    }
    if(dianascimento <= diaatual){
        console.log(`${nome}, você tem ${ano - anonascimento} anos de idade`)
    }   
}  

if(mesnascimento > mesatual){
    console.log(`${nome}, você tem ${(ano - anonascimento) - 1} anos de idade`)

    }  
