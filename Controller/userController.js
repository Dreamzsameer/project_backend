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
              success:true
            });
          })
          .catch((err) => {
            res.status(500).json({ success:false });
            console.log(err);
          });
      }
    });
});

router.post("/login", function (req, res) {
  User.find({ email: req.body.email, password: req.body.password })
    .then((result) => {
      if (result != null) {
        res.status(201).json({
          data: result,
          message: "Login Success",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Invalid Login",
      });
    });
});

module.exports = router;
