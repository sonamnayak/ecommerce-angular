const Wishlist = require("../models/wishlist.model");
const router = require("express").Router();

router
  .get("/", (req, res) => {
    Wishlist.find()
      .then((docs) => res.send(docs))
      .catch((err) => res.send(err));
  })
  .post("/", (req, res) => {
    const obj = req.body;
    Wishlist.create(obj)
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  });

module.exports = router;