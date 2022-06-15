interface IFornecedor{
    id: number
    nome: string
    email: string
    fone: string
    cpf: (string | number)
}

var fornecedor: IFornecedor = {id: 0, nome: "", email: "", fone: "", cpf: ""}

fornecedor.id = 10;
fornecedor.nome = "antartica";
fornecedor.email = "pinguim@gmail.com";
fornecedor.fone = "666-666";
fornecedor.cpf = 895;

console.log(fornecedor);