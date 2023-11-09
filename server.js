const express = require("express");
require("dotenv").config();
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const PORT = process.env.PORT;
const cors = require("cors");
const app = express();
const upload = require("./utils/awsUtils");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors());

console.log("Server started");
app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
});

// app.post("/upload", (req, res) => {
//   res.json("Hello");
// });

app.listen(PORT, console.log("Server is running on port ", PORT));
