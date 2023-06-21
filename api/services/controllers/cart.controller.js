const Cart = require("../models/cart.model");
const router = require("express").Router();

router
  .get("/", (req, res) => {
    Cart.find()
      .then((docs) => res.send(docs))
      .catch((err) => res.send(err));
  })
  .post("/", (req, res) => {
    const obj = req.body;
    Cart.create(obj)
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  });

module.exports = router;