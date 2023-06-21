const Product = require("../models/product.model");
const router = require("express").Router();

router
  .get("/", (req, res) => {
    Product.find()
      .then((docs) => res.send(docs))
      .catch((err) => res.send(err));
  })
  .get("/product/:id", (req, res) => {
    const id = req.params.id;
    Product.findById(id)
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  })
  .post("/", (req, res) => {
    const obj = req.body;
    Product.create(obj)
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  });

module.exports = router;