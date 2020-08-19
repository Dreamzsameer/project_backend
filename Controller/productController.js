const express = require("express");
const router = express.Router();
const Product = require("../Model/productModal");

let dateob = new Date();
let date = ("0" + dateob.getDate()).slice(-2);
let month = ("0" + (dateob.getMonth() + 1)).slice(-2);
let year = dateob.getFullYear();
var currenttime = year + "-" + month + "-" + date;

router.post("/add", (req, res) => {
  console.log(req.body);
  const product = new Product({
    productname: req.body.productname,
    brand: req.body.brand,
    price: req.body.price,
    date: currenttime,
    description: req.body.description,
    warrenty: req.body.warrenty,
    image: req.body.image,
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
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error displaying product",
      });
    });
});

router.get("/get/:id", (req, res) => {
  pid = req.params.id.toString();
  Product.findById(pid)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/update", (req, res) => {
  console.log(req.body);
  Product.findByIdAndUpdate(req.body.id, req.body, { new: true }, () => {
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
