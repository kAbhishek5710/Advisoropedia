import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json()); //by default json is not allowed to send to server directly

app.listen(8080, () => {
  console.log("App is listening to port 8080");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
