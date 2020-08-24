"use strict";
const express = require("express");
const router = express.Router();
const User = require("../Model/userModal");

router.post("/register", (req, res) => {
  console.log(req.body);
  User.find({ email: req.body.email })
    .exec()
    .then((userData) => {
      if (userData.length >= 1) {
        res.status(200).json({ message: "Email already exists" });
      } else {
        const user = new User({
          fullname: req.body.fullname,
          email: req.body.email,
          mobile: req.body.mobile,
          password: req.body.password,
          address: req.body.address,
        });

        user
          .save()
          .then((success) => {
            res.status(201).json({
              success: true,
            });
          })
          .catch((err) => {
            res.status(500).json({ success: false });
            console.log(err);
          });
      }
    });
});

router.post("/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  console.log(email);

  User.findOne({ email: email, password: password })
    .then((result) => {
      if (result != null || result != "") {
        // var data = {
        //   _id: result._id,
        //   fullname: result.fullname,
        //   email: result.email,
        //   mobile: result.mobile,
        //   address: result.address,
        // };
        res.status(201).json({
          _id: result._id,
          fullname: result.fullname,
          email: result.email,
          mobile: result.mobile,
          address: result.address,
        });
      } else {
        res.status(500).json({
          message: "Invalid Login",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Invalid Login",
      });
    });
});

router.put("/update/:uid", (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.uid, req.body, { new: true }, () => {
    res.status(201).json({
      message: "User updated",
    });
  });
});

module.exports = router;
