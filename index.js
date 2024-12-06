require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
console.log(process.env.PORT)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
  res.send('japneetKaur@4564')
})

app.get('/login',(req,res)=>{res.send('<h1>please login at chai aur code</h1>')})

app.get('/start',(req,res)=>{
  res.send("hello worlds yay jappa")
})

app.get('/youtube',(req,res)=>{res.send('<h2>chai aur code </h2>')})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
