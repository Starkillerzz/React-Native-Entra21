class Conexao{
    static path: string = ''
    database: string = ''
}

let conexao = new Conexao()
conexao.database = "loja"

let con2 = new Conexao()
con2.database = "posto"


Conexao.path = "c:/users/db.json"