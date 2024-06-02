const { prisma } = require("../models/prisma");
const jwt = require("jsonwebtoken");

const cartInfo = async (req, res) => {
  const cart_id = Number(req.params.id);
  const cartItems = await prisma.cart.findMany({
    where: {
      cart_id,
    },
    include: {
      cart_item: {
        include: {
          product_detail: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });

  // Item details
  const itemDetails = cartItems.map((cartItems) => ({
    cart_id: cartItems.cart_id,
    items: cartItems.cart_item.map((item) => ({
      cart_item_id: item.cart_item_id,
      quantity: item.quantity,
      product: {
        productName: item.product_detail.product.product_name,
        productSex: item.product_detail.product.sex_cat,
        productDesc: item.product_detail.product.product_description,
        productCat: item.product_detail.product.category_name,
        productPrice: item.product_detail.product.product_price,
        productThumb: item.product_detail.product.product_thumb,
      },
    })),
  }));

  return res.status(200).send({
    message: "Cart info retrieved!",
    data: itemDetails,
  });
};

const addToCart = async (req, res) => {
  const token = req.headers.authorization;
  const customer_id = jwt.verify(token, process.env.JWT_SECRET);
  const { product_details_id, quantity } = req.body;

  if (!product_details_id) {
    return res.status(400).send({
      message: "Product has been selected yet!",
    });
  }

  try {
    // check existing cart!
    let existingCart = await prisma.cart.findFirst({
      where: {
        customer_id: customer_id.userId,
      },
    });

    if (!existingCart) {
      existingCart = await prisma.cart.create({
        data: {
          customer_id: customer_id,
        },
      });
    }
    // if cart already exists, update cart_item !
    const existingCartItem = await prisma.cart_Item.findFirst({
      where: {
        cart_id: existingCart.cart_id,
        product_details_id: product_details_id,
      },
    });

    // Check items in cart!
    if (existingCartItem) {
      return res.status(400).send({
        message: "Product already in your cart!",
      });
    }

    // Add item in cart!
    const addItem = await prisma.cart_Item.create({
      data: {
        cart_id: existingCart.cart_id,
        product_details_id: product_details_id,
        quantity: quantity,
      },
    });
    return res.status(200).send({
      message: "Product added to cart!",
      data: {
        cart: addItem,
      },
    });
  } catch (err) {
    console.error("Failed add product to cart!", err);
    return res.status(500).send({
      message: "Failed add product to cart!",
      error: err.message,
    });
  }
};

const updateCart = async (req, res) => {
  const cart_id = req.params.id;
  const { cart_item_id, action } = req.body;

  if (!action) {
    return res.status(400).send({
      message: "Error: field action invalid",
    });
  }

  if (!action) {
    return res.status(400).send({
      message: "Error: field cart_item_id invalid",
    });
  }

  try {
    switch (action) {
      case "increase":
        // increase product quantity
        const increaseQuantity = await prisma.cart.update({
          where: {
            cart_id: Number(cart_id),
          },
          data: {
            cart_item: {
              update: {
                where: {
                  cart_item_id: Number(cart_item_id),
                },
                data: {
                  quantity: {
                    increment: 1,
                  },
                },
              },
            },
          },
          include: {
            cart_item: true,
          },
        });

        return res.status(200).send({
          message: "Quantity item updated!",
          data: increaseQuantity,
        });

      case "decrease":
        // decrease product quantity
        const decreaseQuantity = await prisma.cart.update({
          where: {
            cart_id: Number(cart_id),
          },
          data: {
            cart_item: {
              update: {
                where: {
                  cart_item_id: Number(cart_item_id),
                },
                data: {
                  quantity: {
                    increment: -1,
                  },
                },
              },
            },
          },
          include: {
            cart_item: true,
          },
        });

        return res.status(200).send({
          message: "Quantity item updated!",
          data: decreaseQuantity,
        });

      default:
        break;
    }
  } catch (error) {
    console.error("Failed updated item in cart!", error);
    return res.status(500).send({
      message: "Failed update item in cart",
      error: error.message,
    });
  }
};

const deleteCartItem = async (req, res) => {
  const cart_id = req.params.id;
  const { cart_item_id } = req.body;

  try {
    const deleteItem = await prisma.cart.update({
      where: {
        cart_id: Number(cart_id),
      },
      data: {
        cart_item: {
          delete: {
            cart_item_id: cart_item_id,
          },
        },
      },
      include: {
        cart_item: true,
      },
    });

    const cartItem = await prisma.cart.findMany({
      where: {
        cart_id: Number(cart_id),
      },
      include: {
        cart_item: true,
      },
    });

    return res.status(200).send({
      message: "Item deleted from cart!",
      data: cartItem,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Failed delete item!",
    });
  }
};

module.exports = {
  cartInfo,
  updateCart,
  addToCart,
  deleteCartItem,
};
