import express from "express";
import { getStudents,postStudents } from "../controller/studentController";

let studentRouter = express.Router();

studentRouter.get("/",getStudents );

export default studentRouter;
