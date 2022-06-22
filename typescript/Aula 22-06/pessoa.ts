class Pessoa{
    id: number
    nome: string
    fone: number
    email: string


    constructor(id: number, nome: string, fone: number, email: string){
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
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
}

export {Pessoa}
