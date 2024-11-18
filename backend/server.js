import express from 'express'
import cors from 'cors'
import'dotenv/config'


// configuration de application

const app = express()
const port = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors())

//app endpoints
  
app.get('/',(req,res)=>{
    res.send('API WORKING drfveqefd')
})

app.listen(port,()=> console.log("Server Started",port))