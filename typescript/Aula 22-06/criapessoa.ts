import { Pessoa } from "./pessoa";

var ruan = new Pessoa (1 , "ruan" , 33873467, "ruan@mail.com" , 58, 1.78 )

var ana = new Pessoa(2, "ana" , 123456 , "ana@mail.com", 65, 1.59)

var joao = new Pessoa(3, "joão" , 12345689 , "joao@mail.com" , 90 , 1.95)

console.log(ruan.imc())


let pessoas: Pessoa[] = []
pessoas.push(ruan)
pessoas.push(ana)
pessoas.push(joao)
pessoas.push(new Pessoa(4, "maria", 33874521, "maria@mail.com", 52 , 1.60))

/*Percorre o array pessoas que contem os dados de Pessoa*/
pessoas.forEach((p) => p.imprimirnatela())