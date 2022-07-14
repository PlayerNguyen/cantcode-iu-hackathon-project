const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

const globalUrl = process.env.GLOBAL_URL || "http://localhost:3000";

router.get("/", (req, res, next) => {
  res.json({
    user_info: `${globalUrl}/users/:id`,
    user_create: `${globalUrl}/users`,
    user_update: `${globalUrl}/users/:id`,
    user_delete: `${globalUrl}/users/:id`,
  });
});

router.get("/:id", (req, res, next) => {
  let { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: "Missing id",
    });
  }

  UserModel.findById(id, (err, user) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.json(user);
  });
});

router.post("/", (req, res, next) => {
  const { name, email, password } = req.body;

  // Empty name or email or password
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Missing name, email or password",
    });
  }

  UserModel.create({ name, email, password })
    .then((user) => {
      const { id, name, email } = user;
      res.status(201).json({
        id,
        name,
        email,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: "Missing id",
    });
  }

  // find the id
  UserModel.findById(id, (err, user) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // update the user
    user.save((err) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      } else {
        res.status(200).json({
          message: "User updated",
          userId: user.id,
        });
      }
    });
  });
});

module.exports = router;
