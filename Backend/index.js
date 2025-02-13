const express = require("express");
const connectDB = require("./database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "https://food-x-coral.vercel.app/",  
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./auth");

app.use("/", authRouter);

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(5000, () => {
      console.log("Server is successfully listening on port 5000...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
