import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((er) => {
    console.log(process.env.MONGO);
    console.log(er);
  });

app.listen(3000, () => {
  console.log("Server is running in port 3000!!");
});
