import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";




const app = express()
app.use(bodyparser.json())

let mongoUrl = "mongodb+srv://admin:123@cluster0.gzhw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// //mongoose.connect(mongoUrl);

// const connection = mongoose.connection;

// connection.once("open",() => 
//     {
//     console.log("mongodb connection established successfully")
// })

mongoose
  .connect(mongoUrl)
  .then(() => 
    console.log("MongoDB connection established successfully"))
  .catch
  ((err) => console.error("MongoDB connection error:", err));



app.get("/",
    (req,res)=>{
    console.log(req)
    console.log("This is a get request")
    
    res.json (
        {message: "Hello world "+req.body.name}
    )
})

app.post("/",
    (req,res)=>{
    let studentSchema = mongoose.Schema({
        name : String,
        age : Number,
        height : Number,
    });
    let Student = mongoose.model("students",studentSchema)

    let newStudent = req.body
    let student = new Student(newStudent)

    student.save().then(
        ()=>{
            res.json(
                {
                    "message" : "Student saved successfully"
                }
            )
        }
        .catch(
            ()=>{
                res.json(
                    {
                        "message" : "Student could not be saved"
                    }
                )
            }
        )

    )


});


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})


