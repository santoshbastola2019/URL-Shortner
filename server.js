const express = require("express");
const app = express();
const { connectDB } = require("./config/dbConnect");
require("dotenv").config();
const urlRouter = require("./routes/urlRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/", urlRouter);
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server connected at PORT ${PORT}`);
});
