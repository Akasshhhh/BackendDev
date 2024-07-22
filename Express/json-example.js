const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,description} = product
        return {id,name,description}
    })
    res.json(newProducts)
})

app.listen(5000, (req,res)=>{
    console.log("Server is listening of port 5000.....................")
})