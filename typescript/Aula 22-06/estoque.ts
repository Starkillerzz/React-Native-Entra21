class Estoque{
    descricao: string
    valorunitario: number
    qtdestoque: number

    constructor (descricao: string, valorunitario: number, qtdestoque: number){
        this.descricao = descricao
        this.valorunitario = valorunitario
        this.qtdestoque = qtdestoque
    }

    getestoque(): string{
        return `O estoque de ${this.descricao} é: ${this.qtdestoque}`
    }

    precocomdesconto(): void{
        let taxa: number = 0.3
        let desconto: number = parseFloat((this.valorunitario * taxa).toFixed(3))
        console.log(`O preço do ${this.descricao} com desconto é de ${(this.valorunitario - desconto).toFixed(3)}`) 
        
    }

    precocomacrescimo(): void{
        let taxa: number = 0.2
        let acrescimo: number = parseFloat((this.valorunitario * taxa).toFixed(3))
        console.log(`O preço do ${this.descricao} com acréscimo é de ${(this.valorunitario + acrescimo).toFixed(3)}`)
    }
}

export {Estoque}