const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Ride } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll();

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("login-page", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {


    res.render("signup-page", {

      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/profile", async (req, res) => {
  try {


    res.render("profile", {

      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/dashboard", async (req, res) => {
  try {

    const userData = await User.findAll();

    const rideData = await Ride.findAll();

    const users = userData.map((user) =>
      user.get({ plain: true })
    );

    const ride = rideData.map((rides) =>
      rides.get({ plain: true })
    );

    res.render("dashboard", {
      users,
      ride,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
