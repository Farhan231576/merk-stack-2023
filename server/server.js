import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URL;
const app = express();
app.use(cors());

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
