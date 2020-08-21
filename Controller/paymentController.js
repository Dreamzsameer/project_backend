const express = require("express");
const router = express.Router();
const Payment = require("../Model/paymentModal");

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
var current_time = year + "-" + month + "-" + date;

router.post("/add", (req, res) => {
  const payment = new Payment({
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    amount: req.body.amount,
    date_time: current_time,
  });

  payment
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Payment successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error making payment",
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
        message: "Error displaying payment history",
      });
    });
});

router.get("/get/:id", (req, res) => {
  p_id = req.params.id.toString();
  Product.findById(p_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error displaying payment history",
      });
    });
});

module.exports = router;
