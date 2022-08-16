import * as express from "express"
import {Request, Response} from "express"
import { convertTypeAcquisitionFromJson } from "typescript"
import dataSource from './datasource'
import { User } from "./entity/User"
import { Carros } from "./entity/carros"
const usuarios = require ('./app')
const carros = require ('./RotasCarros')

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
app.use(express.json())

app.use('/users', usuarios)
app.use('/carros', carros)



const  PORT = process.env.PORT


app.listen(PORT, () => {console.log(`executando em http://localhost:${PORT}`)})