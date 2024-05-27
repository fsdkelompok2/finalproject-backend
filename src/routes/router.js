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

// Product
router.get("/products", getProducts);

// User
router.post("/users/login", login);
router.post("/users/register", register);
router.post("/users/sendVerificationCode", sendVerificationCode);
router.get("/users", verifySession, users);

// Cart
router.get("/cart/:id", cartInfo);
router.put("/cart/:id", updateCart);
router.delete("/cart/:id", deleteCartItem);
router.post("/cart", addToCart);

// Wishlist
router.get("/wishlist/:id", wishlistInfo);
router.put("/wishlist/:id", updateWishList);

module.exports = router;
