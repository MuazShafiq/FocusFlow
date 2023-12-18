const express = require("express");
const passport = require("../auth/auth");
const { ensureAuthenticated } = require('../middleware/authMiddleware');
const User = require('../models/user');
const Session = require('../models/session');

const router = express.Router();

// Google OAuth 2.0 authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to home or user dashboard
    res.redirect("/dashboard");
  }
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Test route that requires authentication
router.get('/profile', ensureAuthenticated, (req, res) => {
  res.json(req.user); // This will display the authenticated user's information
});

module.exports = router;