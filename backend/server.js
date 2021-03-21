const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const clicksRoutes = require("./routes/clicks.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", clicksRoutes);

app.use((req, res) => {
  res.status(404).send({ message: "Not found..." });
});

// connects our backend code with the database
mongoose.connect("mongodb://localhost:27017/cookieClicker", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});
db.on("error", (err) => console.log("Error " + err));

app.listen("8000", () => {
  console.log("Server is running on port: 8000");
});
