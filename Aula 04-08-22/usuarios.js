const express = require('express')
const pg = require('pg')
var router = express.Router()
const bcrypt = require ('bcrypt')
const { Router } = require('express')
const app = express()
const jwt = require('jsonwebtoken')




const pool = new pg.Pool({connectionString: process.env.DATABASE_URL })


/*app.use(express.urlencoded({extended:false}))
app.use(express.json())*/



router.post('/', (req, res)=>{
    pool.connect((err, client, release)=>{
        if(err){
            return res.status(401).send({
                message: 'Conexão não autorizada'
            })
        }
        bcrypt.hash(req.body.senha, 10, (erro, hash)=>{

            var sql = 'INSERT INTO usuarios (nome, email, senha, perfil) VALUES ($1, $2, $3, $4);'

            var dados = [req.body.nome, req.body.email, hash, req.body.perfil]

            client.query(sql, dados, (erro, result)=>{
                if(erro){
                    return res.send({
                        message: 'não foi possível cadastrar usuario',
                        erro: erro.message
                    })
                }
                if (result){
                    return res.status(201).send({
                        message: 'usuario cadastrado com sucesso!'
                    })
                }
    
            })
            release()
        })  

    })

})

router.post('/login' , (req, res) =>{
    pool.connect((erro, client, release)=>{
        var sql = 'SELECT * FROM usuarios WHERE email=$1;'
        var dados = [req.body.email]
        client.query(sql, dados, (erro, result)=>{
            if(result.rowCount > 0){
                bcrypt.compare(req.body.senha, result.rows[0].senha, (err, results)=>{
                    if(results){
                        var token = jwt.sign({
                            nome: result.rows[0].nome,
                            email: result.rows[0].email,
                            perfil: result.rows[0].perfil
                        }, process.env.JWT_KEY)
                        return res.send({
                            token: token
                        })
                    }
                    
                    else{
                        return res.status(403).send({
                            message: 'senha não confere'
                        })
                    }
                })
            }
            else{res.send({
                message: 'usuario não encontrado'
            })
        }

            

        })
    })
})


module.exports = router