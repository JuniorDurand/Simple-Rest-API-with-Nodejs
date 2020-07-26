// O conteudo do arquivo index.js está duplicado por causa da forma padrão adotada pelo repl.it, onde não é possivel modificar o arquivo main em seu runtime


const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./src/bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('/produto/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req, res, next) => {
  const produto = bancoDeDados.salvaProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  console.log(produto)
  res.send(produto) // JSON
})

app.put('/produtos/:id',(req, res, next) => {
  const produto = bancoDeDados.salvaProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  console.log(produto)
  res.send(produto) // JSON
})

app.delete('/produtos/:id',(req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  console.log(produto)
  res.send(produto) // JSON
})



app.listen(porta, ()=> {
  console.log(`Servidor executando na porta ${porta}`)
})