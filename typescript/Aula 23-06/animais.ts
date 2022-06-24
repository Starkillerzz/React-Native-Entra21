class Animal {
    raca: string = ""
    especie: string = ""
}

let animal: Animal
animal = new Animal()
animal.raca = "ruim"
animal.especie = "pintscher"

class Mamifero extends Animal{
    numeroMamas: number = 0
}

let mamifero: Mamifero
mamifero = new Mamifero()
mamifero.numeroMamas = 8
mamifero.raca = "pitbull"
mamifero.especie = "canina"

class Cachorro extends Mamifero {
    cor: string = ""
}

let cachorro: Cachorro = new Cachorro()
cachorro.cor = "malhado"
cachorro.raca = "dalmata"
cachorro.especie = "canina"
cachorro.numeroMamas = 8