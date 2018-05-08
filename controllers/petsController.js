const express = require("express");
const router = express.Router();
const pet = require("../models/pet.js");

router.get("/", function (req, res) {
  pet.selectAll(function (data) {
    console.log(data);
    res.render("index", { data });
  });
});

router.post("/pets", function (req, res) {
  pet.createOne([
    "name"
  ], [
      req.body.name
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/pets", function (req, res) {
  pet.updateOne(res.body.id, function (result) {
      res.redirect('/');
    });
});

module.exports = router;
