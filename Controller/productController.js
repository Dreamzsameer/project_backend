const express = require("express");
const router = express.Router();
const Product = require("../Model/productModal");

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
var current_time = year + "-" + month + "-" + date;

router.post("/add", (req, res) => {
  console.log(req.body);
  const product = new Product({
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    added_date: current_time,
    desc: req.body.desc,
    warrenty: req.body.warrenty,
    img: req.body.img,
  });

  product
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Product added successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error adding product",
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
        message: "Error displaying product",
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
      res.send(err);
    });
});

router.put("/update", (req, res) => {
  console.log(req.body);
  Product.findByIdAndUpdate(req.body._id, req.body, { new: true }, () => {
    res.send("Product updated");
  });
});

router.delete("/delete/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("Product removed");
      res.send(true);
    })
    .catch(() => {
      res.status(500).json({
        message: "Error deleting product",
      });
    });
});

module.exports = router;
