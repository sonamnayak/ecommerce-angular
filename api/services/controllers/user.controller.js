const User = require("../models/user.model");
const router = require("express").Router();

router
  .get("/", (req, res) => {
    User.find()
      .then((docs) => res.send(docs))
      .catch((err) => res.send(err));
  })
  .get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  })
  .post("/", (req, res) => {
    const obj = req.body;
    User.create(obj)
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  });
module.exports = router;
