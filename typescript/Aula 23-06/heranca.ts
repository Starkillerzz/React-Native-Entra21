class Person{
    name: string
    constructor (name: string){
        this.name = name
    }
}

class Empregado extends Person{
    matricula: string = ""
    constructor(name:string , matricula: string){
        super(name)
        this.matricula = matricula
    }
}

let emp1: Empregado
emp1 = new Empregado("ruan" , "123")

console.log(emp1)