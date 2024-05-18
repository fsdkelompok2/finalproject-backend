const express = require("express");
const {
  login,
  logout,
  register,
  users,
  updateUser,
  sendVerificationCode,
} = require("../controllers/users.controller");
const { verifySession } = require("../middlewares/verifySession.middleware");
const {
  cartInfo,
  updateCart,
  addToCart,
  deleteCartItem,
} = require("../controllers/cart.controller");
const { getProducts } = require("../controllers/products.controller");
const {
  wishlistInfo,
  updateWishList,
} = require("../controllers/wishlist.controller");

const router = express.Router();

// Products
router.get("/products", getProducts);

router.post("/users/login", login);
router.post("/users/register", register);
router.post("/users/sendVerificationCode", sendVerificationCode);
router.post("/users/logout", verifySession, logout);

router.put("/users", verifySession, updateUser);
router.get("/users", verifySession, users);

router.get("/cart/:id", cartInfo);
router.put("/cart/:id", updateCart);
router.delete("/cart/:id", deleteCartItem);
router.post("/cart", addToCart);

router.get("/wishlist/:id", wishlistInfo);
router.put("/wishlist/:id", updateWishList);

module.exports = router;
