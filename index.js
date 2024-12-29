import express from "express"
import bodyparser from "body-parser"

const app = express()
app.use(bodyparser.json())

app.get("/",
    (req,res)=>{
    console.log(req)
    console.log("This is a get request")
    
    res.json (
        {message: "Hello world "+req.body.name}
    )
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})


