interface IAnimal{
    raca: string
    especie: string
    barulho (x:string): void;
}

interface IMamifero{
    quantidadeMamas: number
    getQtdeLeite(): number
}

class Bicho implements IAnimal, IMamifero{
    raca: string = "Piatã"
    especie: string = "Suína"
    quantidadeMamas: number = 10


    barulho(x:string): void{
        console.log(`Barulho de ${x}`)
    }
    getQtdeLeite(): number {
        return 10
    }

    display(){
        console.log(`Raça: ${this.raca}`)
        console.log(`Espécie: ${this.especie}`)
        console.log(`Número de Mamas: ${this.quantidadeMamas}`)
    }
}

let bicho = new Bicho
bicho = new Bicho()
bicho.barulho("pocotó pocotó")
bicho.display()