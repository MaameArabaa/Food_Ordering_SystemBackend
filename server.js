const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes")
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(authRoutes)

app.get("/",(req,res)=>{
    res.send("Welcome to Araba's first server")
})

app.listen(PORT, ()=>{ 
    console.log(`Server is running at http://localhost:${PORT}`)
})