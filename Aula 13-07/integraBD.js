const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
//app.use(express.urlencoded({extended:false}))
//app.use(express.json())


var pg = require('pg')
var conString = "postgres://postgres:*@localhost/estacionamento"

const pool = new pg.Pool({connectionString: conString})

app.get('/conectar', (req, res) => {
    pool.connect((err, client) => {
        if(err){
            return res.status(401).send({
                mensagem: 'Erro de conexão',
                erro: err.message
            })
        }
        return res.status(200).send({
            mensagem: 'conectado com sucesso!'
        })
    })
  })

  app.get('/clientes' , (req, res) => {
      pool.connect((err, client, release) =>{
          if(err){
              release()
            return res.status(401).send({
                mensagem: 'Erro de conexão',
                erro: err.message
            })
        }
        client.query('SELECT * FROM cliente', (error, result) => {
            release()
            if(error){
                return res.status(500).send({
                    mensagem: "ocorreu erro na consulta ",
                    erro: error.message
                })
            }

            return res.status(200).send(result.rows)
        })
      })
  })

  app.get('/consultar/carros' , (req, res) => {
    pool.connect((err, client, release) =>{
        if(err){
            release()
          return res.status(401).send({
              mensagem: 'Erro de conexão',
              erro: err.message
          })
      }
      client.query('SELECT * FROM carros', (error, result) => {
          release()
          if(error){
              return res.status(500).send({
                  mensagem: "ocorreu erro na consulta ",
                  erro: error.message
              })
          }

          return res.status(200).send(result.rows)
      })
    })
})

app.get('/consultar/todos' , (req, res) => {
    pool.connect((err, client, release) =>{
        if(err){
            release()
          return res.status(401).send({
              mensagem: 'Erro de conexão',
              erro: err.message
          })
      }
      client.query('SELECT * FROM tem', (error, result) => {
          release()
          if(error){
              return res.status(500).send({
                  mensagem: "ocorreu erro na consulta ",
                  erro: error.message
              })
          }

          return res.status(200).send(result.rows)
      })
    })
})

app.get('/clientes/:idcliente' , (req, res) => { 
    //res.status(200).send("busca de cliente por id" + req.params.idcliente)
    pool.connect((err, client, release) =>{
        if(err){
            release()
          return res.status(401).send({
              mensagem: 'Erro de conexão',
              erro: err.message
          })
      }
      
      client.query(`SELECT * FROM cliente WHERE id=${req.params.idcliente}`, (error, result) => {
          release()
          if(error){
              return res.status(500).send({
                  mensagem: "ocorreu erro na consulta ",
                  erro: error.message
              })
          }
          if(result.rows.length > 0 ){
            return res.status(200).send(result.rows[0])

          }else{
            return res.status(404).send({
                mensagem: "Id não existente",
                erro: 404
            })
          }
          
          
      })
    })
})

app.get('/carros/:idcarro' , (req, res) => { 
   
    pool.connect((err, client, release) =>{
        if(err){
            release()
          return res.status(401).send({
              mensagem: 'Erro de conexão',
              erro: err.message
          })
      }
      
      client.query(`SELECT * FROM carros WHERE id=${req.params.idcarro}`, (error, result) => {
          release()
          if(error){
              return res.status(500).send({
                  mensagem: "ocorreu erro na consulta ",
                  erro: error.message
              })
          }
          if(result.rows.length > 0 ){
            return res.status(200).send(result.rows[0])

          }else{
            return res.status(404).send({
                mensagem: "Id não existente",
                erro: 404
            })
          }
          
          
      })
    })
})

app.get('/consultar/carros_clientes/:idcliente' , (req, res) => { 
   
    pool.connect((err, client, release) =>{
        if(err){
            release()
          return res.status(401).send({
              mensagem: 'Erro de conexão',
              erro: err.message
          })
      }
      
      client.query(`SELECT tem.cliente_id, tem.carros_id, cl.nome, ca.placa, ca.marca, ca.modelo
      FROM tem , carros ca, cliente cl
      WHERE tem.carros_id = ca.id
      AND tem.cliente_id = cl.id
      AND cl.id = ${req.params.idcliente}`, (error, result) => {
          release()
          if(error){
              return res.status(500).send({
                  mensagem: "ocorreu erro na consulta ",
                  erro: error.message
              })
          }
          if(result.rows.length > 0 ){
            return res.status(200).send(result.rows)

          }else{
            return res.status(404).send({
                mensagem: "Id não existente",
                erro: 404
            })
          }
          
          
      })
    })
})


app.listen (8080, () => console.log('Executando em http://localhost:8080'))