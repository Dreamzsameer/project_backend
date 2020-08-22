const express = require("express");
const router = express.Router();
const Feedback = require("../Model/feedbackModal");

router.post("/:uid/:pid", (req, res) => {
  const feedback = new Feedback({
    userid: req.params.uid,
    product_id: req.params.pid,
    amount: req.body.amount,
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
    user: req.body.userid,
    product: req.body.productid,
    feedback: req.body.feedback,
    rating: req.body.rating,
  });

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
  var returnData = [];
  Feedback.find()
    .populate("user")
    .populate("product")
    .then(function (data) {
      data.forEach((element) => {
        console.log(element.product.productname);
        returnData.push({
          id: element._id,
          fullname: element.user.fullname,
          feedback: element.feedback,
          rating: element.user.rating,
        });
      });
      res.send(returnData);
    });
});

router.get("/get/:productid", (req, res) => {
  p_id = req.params.productid.toString();
  var returnData = [];
  Feedback.find({ product: p_id })
    .populate("user")
    .populate("product")
    .then(function (data) {
      data.forEach((element) => {
        returnData.push({
          id: data._id,
          fullname: element.user.fullname,
          feedback: element.feedback,
          rating: element.rating,
        });
      });

      res.send(returnData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error displaying feedback",
      });
    });
});

module.exports = router;
