import * as express from "express"
import tipo from './tipos'

            
const app = express()
app.use(express.json())
app.use('/tipos', tipo)
app.use('/itens')
/*app.use('/estabelecimento', estabelecimento)*/

const PORT = process.env.PORT

app.listen(PORT, ()=>{console.log(`executando em http://localhost:${PORT}`)})