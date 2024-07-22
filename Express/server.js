const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname))

// app.get('/',(req,res)=>{
//     console.log("user hit the home page")
//     res.status(200).send("Home page")
// })


app.get('/about',(req,res)=>{
    res.send("About page")
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen