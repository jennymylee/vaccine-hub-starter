const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    // take users email and password and attempt to authenticate them
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    // take users email, password, rsvp status, and the number of guests
    // and create a new user in our database
  } catch (err) {
    next(err);
  }
});

module.exports = router;
