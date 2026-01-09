const express = require("express")

const app = express()
const port = 3001

function auth(req,res ,next){
    console.log(`method : ${req.method}`)
    console.log(`url : ,${req.url}`)
    next()
}

app.use(auth)

app.get("/",auth,(req,res)=>{
    res.json({name:"DEKENI Toha"})
})


app.listen(port,_=>console.log(`server run on : http://localhost: ${port}`))