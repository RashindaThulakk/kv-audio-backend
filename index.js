import express from "express";

const app = express();


app.get("/", () => {
  console.log("That is a request");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
