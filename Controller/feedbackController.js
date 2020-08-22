const express = require("express");
const router = express.Router();
const Feedback = require("../Model/feedbackModal");
const User = require("../Model/userModal");
const Product = require("../Model/productModal");

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
var current_time = year + "-" + month + "-" + date;

router.post("/:uid/:pid", (req, res) => {
  const feedback = new Feedback({
    user_id: req.params.uid,
    product_id: req.params.pid,
    amount: req.body.amount,
    date_time: current_time,
  });

  feedback
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Feedback sent",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error sending feedback",
      });
    });
});
router.post("/add", async (req, res) => {
  const feedback = new Feedback({
    user: req.body.user_id,
    product: req.body.product_id,
    amount: req.body.amount,
    date_time: current_time,
  });
  const user = new User();
  const product = new Product();

  feedback
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Feedback registered.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error sending feedback",
      });
    });
});

router.get("/get", (req, res) => {
  Feedback.find()
    .populate("user")
    .populate("product")
    .then(function (data) {
      var returnData = {};
      data.forEach((element) => {
        console.log(element);
      });
      res.send(data);
    });
});

router.get("/get/:id", (req, res) => {
  p_id = req.params.id.toString();
  Feedback.find({ product: p_id })
    .populate("user")
    .populate("product")
    .then(function (data) {
      console.log(data);
      var returnData = {
        // user_name:data
      };
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error displaying feedback",
      });
    });
});

module.exports = router;
