import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userrouter from "./routes/userroute.js";
const app = express();
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use("/api/user", userrouter);
