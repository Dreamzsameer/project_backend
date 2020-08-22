const express = require("express");
const router = express.Router();
const Cart = require("../Model/cartModal");

router.post("/add", (req, res) => {
  const cart = new Cart({
    user: req.body.userid,
    product: req.body.productid,
  });

  cart
    .save()
    .then((result) => {
      res.status(201).json({
        message: "cart successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error making cart",
      });
    });
});

router.get("/get", (req, res) => {
  Cart.find()
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error displaying cart history",
      });
    });
});

router.get("/get/:userid", (req, res) => {
  var cartdetails = [];
  userid = req.params.userid.toString();
  Cart.find({ user: userid })
    .populate("user")
    .populate("product")
    .then((data) => {
      data.forEach((element) => {
        console.log(element);
        cartdetails.push({
          userid: element.user._id,
          productid: element.product._id,
          productname: element.product.productname,
          image: element.product.image,
          fullname: element.user.fullname,
          email: element.user.email,
          address: element.user.address,
          mobile: element.user.mobile,
        });
      });
      res.send(cartdetails);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error displaying cart history",
      });
    });
});
router.delete("/delete/:cartid", (req, res) => {
  Cart.findByIdAndDelete(req.params.cartid)
    .then(() => {
      res.status(201).json({
        message: "cart removed",
      });
    })
    .catch(() => {
      res.status(500).json({
        message: "Error deleting cart",
      });
    });
});
module.exports = router;
