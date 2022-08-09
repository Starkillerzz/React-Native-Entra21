const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('index')

})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
   console.log(`executando em http://localhost:${PORT}`)
})