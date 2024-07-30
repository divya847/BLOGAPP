const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./conn/conn");

const blogs = require("./routes/blogs");

app.use(cors());
app.use(express.json());

app.use("/api/v1", blogs);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at: ${process.env.PORT}`);
});

module.exports = app;


