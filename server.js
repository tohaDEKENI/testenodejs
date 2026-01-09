const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

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