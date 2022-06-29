interface ICRUD{
    salvar(): boolean
    update(id:number): boolean
    delete(id:number):void
    consultar(id?: number): string
}

class Produto{
    descricao: string = ""
    preco: number = 0
}

class ProdutoFinal extends Produto implements ICRUD{
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    update(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultar(id?: number): string {
        return(`Consultando por ${id}`)
    }
    

}

let p1 = new ProdutoFinal()
console.log(p1.consultar())

let p2= new ProdutoFinal()
console.log(p2.consultar(10))