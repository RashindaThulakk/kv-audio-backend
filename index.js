import express from "express"
import bodyparser from "body-parser"
import mongoos from "mongoos"

const app = express()
app.use(bodyparser.json())

let mongoUrl = "mongodb+srv://admin:123@cluster0.gzhw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoos connect (mongoUrl)

let connection = mongoos.connection
connection.once("open",()=>{
    console.log("mongodb connection established successfully")
})

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


