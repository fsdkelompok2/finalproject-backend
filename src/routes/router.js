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
const {
  createShipment,
  updateShipment,
} = require("../controllers/shipment.controller");
const { createOrder } = require("../controllers/order.controller");
const {
  createAddress,
  updateAddress,
} = require("../controllers/address.controller");
const { decreaseStock } = require("../controllers/stock.controller");

const router = express.Router();

// Product
router.get("/products", getProducts);

// Decrease Product Stock After Order Success
router.put("/product/stock", decreaseStock);

// User
router.post("/users/login", login);
router.post("/users/register", register);
router.post("/users/sendVerificationCode", sendVerificationCode);
router.post("/users/logout", verifySession, logout);
router.post("/users/verifyEmailCode");
router.get("/users", verifySession, users);
router.put("/users", verifySession, updateUser);

// Addres
router.post("/users/address", verifySession, createAddress);
router.put("/users/address", verifySession, updateAddress);

// Shipment
router.post("/shipment", verifySession, createShipment);
router.put("/shipment", verifySession, updateShipment);

// Order
router.post("/order", verifySession, createOrder);

// Cart
router.get("/cart/:id", verifySession, cartInfo);
router.put("/cart/:id", verifySession, updateCart);
router.delete("/cart/:id", verifySession, deleteCartItem);
router.post("/cart", verifySession, addToCart);

// Wishlist
router.get("/wishlist", verifySession, wishlistInfo);
router.put("/wishlist/:id", verifySession, updateWishList);

module.exports = router;
