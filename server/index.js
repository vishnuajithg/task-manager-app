const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./Model/schema");
const router = require("./Routes/addTask");

app.use(cors());
app.use(express.json());

app.use("/", router);


mongoose
  .connect("mongodb://localhost:27017/TASKMANAGER", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
