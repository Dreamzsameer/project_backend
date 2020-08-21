const express = require("express");
const app = express();

app.use(express.json());
const userRoute = require("./Controller/userController");

app.use("/user", userRoute);

module.exports = app;
