class Person{
    name: string = ""
}

class Empregado extends Person{
    matricula: string = ""
}

let emp1: Empregado
emp1 = new Empregado()
emp1.matricula = "123"
emp1.name = "ruan"

console.log(emp1)