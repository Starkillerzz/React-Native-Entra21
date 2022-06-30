function dados<T>(p1: T, p2:T): T[]{
    let vetor: T[] = []
    vetor.push(p1)
    vetor.push(p2)
    return vetor
}

let numeros = dados<number>(10 ,20)
console.log(numeros)

let frutas2 = dados<string>("laranja" , "banana")
frutas2.push("morango")
console.log(frutas2)

function base<T, U>(n1:T , n2: U){
    console.log(`${n1} , ${n2}`)
}

let boletim2 = base<string, number>("jose" , 7)
let funcionario1 = base<string, boolean>("joão" , true)
let funcionario2 = base<string, boolean>("maria" , false)

