const express = require("express");
const {
  login,
  register,
  users,
  verifyEmailCode,
  sendVerificationCode,
} = require("../controllers/users.controller");

const router = express.Router();

router.post("/users/login", login);
router.post("/users/register", register);
router.post("/users/sendVerificationCode", sendVerificationCode);
router.post("/users/verifyEmailCode", verifyEmailCode);

router.get("/users", users);

module.exports = router;
