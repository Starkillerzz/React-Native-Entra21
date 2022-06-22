class Pessoa{
    id: number
    nome: string
    fone: number
    email: string
    peso: number
    altura: number


    constructor(id: number, nome: string, fone: number, email: string, peso: number, altura: number){
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
    }

    salvar(): void{
        console.log("Salvo com sucesso!")
        
    }

    validar(): void{
        if(this.nome == ""){
            console.log("informe o nome")
        }else if(this.fone == 0){
            console.log("informe o fone")
        }else if(this.email == ""){
            console.log("informe o email")
        }else{
            console.log("dados inseridos com sucesso!")
        }
    }

    imprimirnatela(): void{
        console.log(`id: ${this.id}`)
        console.log(`nome: ${this.nome}`)
        console.log(`fone: ${this.fone}`)
        console.log(`email: ${this.email}`)
    }

    imc():number{
        var altura2: number
        altura2 = parseFloat((this.altura * this.altura).toFixed(2))

        return (this.peso / altura2)
    }
}

export {Pessoa}
