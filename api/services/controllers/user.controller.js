const User = require("../models/user.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 12;

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
    const password = obj.password;
    console.log(password);
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) console.log(err);
      else {
        obj.password = hash
        User.create(obj)
          .then((doc) => res.send(doc))
          .catch((err) => res.send(err));
      }
    });
  });
module.exports = router;
