"use strict";

const userHelper    = require("../lib/util/user-helper");

const express       = require('express');
const usersRoutes  = express.Router();

const cookieSession = require("cookie-session");
usersRoutes.use(cookieSession({signed: false}));

module.exports = function(DataHelpers) {
  // USER routes
  usersRoutes.post("/register", (req, res) => {
    DataHelpers.hasHandle(req.body.handle, function(match) {
      if (match) {
        res.status(403).send('handle already exists; try a different handle');
      } else {
        const user = userHelper.createUser(req.body);
        DataHelpers.saveUser(user);
        req.session.userID = user._id;
        res.redirect("/");
      }
    })
  });

  usersRoutes.post("/login", (req, res) => {
    DataHelpers.hasHandle(req.body.handle, function(match) {
      if (match) {
        req.session.userID = match._id;
        res.redirect("/");
      } else {
        res.status(403).send(`your handle wasn't found, consider registering`);
      }
    });
  });


  usersRoutes.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return usersRoutes;

}
