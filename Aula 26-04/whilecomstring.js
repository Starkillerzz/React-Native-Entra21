let continuar = true
let opcao = "S"

/*
while(continuar){
    console.log(`Olá`)
    continuar = (opcao.toLowerCase() =="s")

}
*/

let contador = 5

while(opcao.toLowerCase() == 's'){
    if(contador > 0){
        console.log(`Ola ${contador}`)

    }
    else{
        opcao = "n"
    }
    contador--
}
console.log("continua execução")