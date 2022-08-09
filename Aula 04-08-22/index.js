const express = require('express')
const app = express()
const pg = require('pg')
const cors = require('cors')
const bcrypt = require ('bcrypt')
const contatos = require ('./contatos')
const usuarios = require ('./usuarios')

/*const pool = new pg.Pool({connectionString: process.env.DATABASE_URL })*/


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/contatos', contatos)
app.use('/usuarios', usuarios)



const PORT = process.env.PORT
app.listen(PORT, ()=>{
   console.log(`executando em http://localhost:${PORT}`)
})