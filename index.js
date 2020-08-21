const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./System/db");
app.use(express.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/assets/images"));
app.use("/assets/images", express.static("assets/images"));
app.use(cors());
const userRoute = require("./Controller/userController");
const productRoute = require("./Controller/productController");
const fileUploadRoute = require("./Controller/imageUploadController");

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/upload", fileUploadRoute);

module.exports = app;
