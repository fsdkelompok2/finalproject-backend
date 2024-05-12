const { prisma } = require("../models/prisma");

const cartInfo = async (req, res) => {
  const cart_id = Number(req.params.id);
  const listing = await prisma.cart.findMany({
    where: {
      cart_id,
    },
    include: {
      cart_item: true,
    },
  });

  return res.status(200).send({
    message: "Cart info retrieved!",
    data: listing,
  });
};

const addToCart = async (req, res) => {
  const cart_id = Number(req.params.id);
  const { product_details_id } = req.body;

  if (!product_details_id) {
    return res.status(400).send({
      message: "Error: field product_details_id invalid",
    });
  }

  try {
    // create cart_item
    const updateCart = await prisma.cart.update({
      where: { cart_id },
      data: {
        cart_item: {
          create: {
            quantity: 1,
            product_details_id,
          },
        },
      },
      include: {
        cart_item: true,
      },
    });

    return res.status(200).send({
      message: "Product added to cart!",
      data: {
        cart: updateCart,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

const updateCart = async (req, res) => {
  const cart_id = Number(req.params.id);
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
      case "delete":
        // delete product from cart
        const deleteCartItem = await prisma.cart.update({
          where: { cart_id },
          data: {
            cart_item: {
              delete: {
                cart_item_id,
              },
            },
          },
          include: {
            cart_item: true,
          },
        });

        return res.status(200).send({
          message: "Product deleted from cart!",
          data: deleteCartItem,
        });

      case "increase":
        // increase product quantity
        const increaseQuantity = await prisma.cart.update({
          where: { cart_id },
          data: {
            cart_item: {
              update: {
                where: {
                  cart_item_id,
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
          message: "Product deleted from cart!",
          data: increaseQuantity,
        });

      case "decrease":
        // decrease product quantity
        const decreaseQuantity = await prisma.cart.update({
          where: { cart_id },
          data: {
            cart_item: {
              update: {
                where: {
                  cart_item_id,
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
          message: "Product deleted from cart!",
          data: decreaseQuantity,
        });

      default:
        break;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { cartInfo, updateCart, addToCart };
