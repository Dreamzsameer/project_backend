const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./System/db");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/assets/images"));
app.use("/assets/images", express.static("assets/images"));

const fileUploadRoute = require("./Controller/imageUploadController");
const userRoute = require("./Controller/userController");
const productRoute = require("./Controller/productController");
const feedbackRoute = require("./Controller/feedbackController");
const paymentRoute = require("./Controller/paymentController");

app.use("/upload", fileUploadRoute);
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/feedback", feedbackRoute);
app.use("/payment", paymentRoute);

module.exports = app;
