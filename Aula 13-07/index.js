/*const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Teste');
});

server.listen(8080, "localhost", () => {
  console.log('Rodando em http://localhost:8080');
}); */

const express = require('express')
const app = express()
var cliente = require('./dados')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cadastro/cliente', (req, res) => {
  res.send('Você está na página de cadastro de cliente')
})

app.get('/cadastro/produto', (req, res) => {
  res.send('Você está em cadastro de produto')
})

app.get('/consulta/estabelecimentos', (req, res) => {
  res.send('você está em consulta de estabelecimentos')
})

app.get('/reserva/restaurantes/schornstein', (req, res) => {
  res.send('Faça sua reserva para o restaurante schornstein!')
})

app.get('/consultar', (req, res) => {
  res.send((JSON.stringify(cliente, null, 4)))
})

app.listen (8080, () => console.log('Executando em http://localhost:8080'))
