import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRoute";


const app = express()
app.use(bodyparser.json())
app.use("/students",studentRouter)

let mongoUrl = "mongodb+srv://admin:123@cluster0.gzhw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.once("open",() => 
    {
    console.log("mongodb connection established successfully")
})

mongoose
  .connect(mongoUrl)
  .then(() => 
    console.log("MongoDB connection established successfully"))
  .catch
  ((err) => console.error("MongoDB connection error:", err));





// app.get("/",(req,res)=>{
//     student.find().then(
//         (result)=> {
//             res.json(result)
// })
//             .catch(
//                 ()=> {
//                     res.json({
//                         message : "error occured"
//                     })
//                 }
//             )
// });




app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})


