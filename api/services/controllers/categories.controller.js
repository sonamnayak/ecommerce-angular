const Category = require("../models/category.model");
const router = require("express").Router();

router
  .get("/", (req, res) => {
    Category.find()
      .then((docs) => res.send(docs))
      .catch((err) => res.send(err));
  })
  .post("/", (req, res) => {
    const obj = req.body;
    Category.create(obj)
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  });

module.exports = router;