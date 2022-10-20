import { DataSource } from "typeorm"
import { Itens } from "./entity/Itens"
import { Tipos } from "./entity/Tipos"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Tipos, Itens],
    logging: false,
    synchronize: true,
})

export default dataSource