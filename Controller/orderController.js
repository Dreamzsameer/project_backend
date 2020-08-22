const express = require("express");
const router = express.Router();
const Order = require("../Model/orderModal");

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
var current_time = year + "-" + month + "-" + date;

router.post("/add", (req, res) => {
  const order = new Order({
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    amount: req.body.amount,
    date_time: current_time,
  });

  order
    .save()
    .then((result) => {
      res.status(201).json({
        message: "order successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error making order",
      });
    });
});

router.get("/get", (req, res) => {
  Product.find()
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error displaying order history",
      });
    });
});

router.get("/get/:id", (req, res) => {
  p_id = req.params.id.toString();
  Product.findById(p_id)
    .populate("feedback")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error displaying order history",
      });
    });
});

module.exports = router;
