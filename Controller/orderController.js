const express = require("express");
const router = express.Router();
const Order = require("../Model/orderModal");

router.post("/add", (req, res) => {
  const order = new Order({
    user: req.body.userid,
    product: req.body.productid,
    payment: false,
  });
  console.log(order);
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

router.get("/get/:userid", (req, res) => {
  var orderdetails = [];
  id = req.params.userid.toString();
  Order.find({ user: id })
    .populate("product")
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        orderdetails.push({
          orderid: element._id,
          productname: element.product.productname,
          image: element.product.image,
          price: element.product.price,
        });
      });
      res.send(orderdetails);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error displaying order history",
      });
    });
});

router.put("/payment", (req, res) => {
  Order.findByIdAndUpdate(req.body.id, { payment: true }, { new: true }, () => {
    res.send("Payment made");
  });
});

router.delete("/delete/:orderid", (req, res) => {
  Order.findByIdAndDelete(req.params.orderid)
    .then(() => {
      res.status(201).json({
        message: "Order removed",
      });
    })
    .catch(() => {
      res.status(500).json({
        message: "Error deleting Order",
      });
    });
});

module.exports = router;
