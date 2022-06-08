
function IMC(n1,n2){
    var conta = (n2*n2)
    var resultado = (n1/conta)
    resultado = resultado.toFixed(2)



if(resultado < 18.5){
       console.log("Obesidade Grau 0 (Magreza)") 
       console.log(`O seu IMC é: ${resultado}`)
}else{
    if(resultado >= 18.6 && resultado <= 24.9){
        console.log("Obesidade Grau 0 (Normal)") 
        console.log(`O seu IMC é: ${resultado}`)
}else{
    if(resultado >= 25 && resultado <=29.9){
        console.log("Obesidade Grau 1 (sobrepeso)") 
        console.log(`O seu IMC é: ${resultado}`)
}else{
    if(resultado >= 30 && resultado <=39.9){
        console.log("Obesidade Grau 2 (Obesidade)")
        console.log(`O seu IMC é: ${resultado}`)
}else{
    if(resultado >= 40){
        console.log("Obesidade Grau 3 (Obesidade Grave)") 
        console.log(`O seu IMC é: ${resultado}`)    
}
}
}
}
}
}
    
IMC(75 , 1.75)
