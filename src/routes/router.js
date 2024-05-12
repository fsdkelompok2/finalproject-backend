const express = require("express");
const {
  login,
  register,
  users,
  verifyEmailCode,
  sendVerificationCode,
} = require("../controllers/users.controller");
const { verifySession } = require("../middlewares/verifySession.middleware");
const { cartInfo, cartUpdate } = require("../controllers/cartcontroller");

const router = express.Router();

router.post("/users/login", login);
router.post("/users/register", register);
router.post("/users/sendVerificationCode", sendVerificationCode);
router.post("/users/verifyEmailCode", verifyEmailCode);

router.get("/users", verifySession, users);


router.get("/cart/:id", cartInfo);
router.put("/cart/:id", cartUpdate)

module.exports = router;
