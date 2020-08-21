const express = require("express");
const router = express.Router();
const auth = require("../System/authentication");
const User = require("../Model/userModel");

router.post("/register", (req, res) => {
  User.find({ email: req.body.email }).exec().then((userData)=>{
    if (userData.length >= 1) {
      res.status(201).json({ message: "Email already exists" });
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
        address: req.body.address,
      });

      user.save().then((success)=>{
        res.json({
          message:true
        })
      }).catch((err)=>console.log(err));
    } 
  })
    
  
});
  
router.post("/login", function (req, res) {
  User.checkCredentialsDb(
    req.body.email,
    req.body.password
  );

  if (users != null) {
    const token = await users.generateAuthToken();
    console.log(token);
    console.log(users);
    res.json({
      token: token,
      users: users,
      message: true,
    });
  } else {
    res.json({
      message: "Invalid Login",
    });
  }
});


module.exports = router;
