import * as express from "express"
import usuarios from './usuarios'
import carros from './RotasCarros'


/* NÃO PRECISA USAR DATASOURCE AQUI PORQUE TEM NAS ROTAS
    dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })*/

const app = express()
app.use(express.json())

app.use('/users', usuarios)
app.use('/carros', carros)



const  PORT = process.env.PORT


app.listen(PORT, () => {console.log(`executando em http://localhost:${PORT}`)})