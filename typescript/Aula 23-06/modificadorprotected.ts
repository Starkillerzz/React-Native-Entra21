class Pessoa{
    nome: string = ""
    protected identificador: number = 0
    private idade: number = 0

    setIdentificador(id:number):void{
        this.identificador = id
    }
}

let pessoa: Pessoa
pessoa = new Pessoa()
pessoa.nome = "ruan"
pessoa.setIdentificador(1000)
console.log(pessoa)

class Aluno extends Pessoa{
    media: number=0
    setIdade(idade: number): void{
        
    }
}
let aluno = new Aluno()
aluno.media = 10
aluno.setIdentificador(25)