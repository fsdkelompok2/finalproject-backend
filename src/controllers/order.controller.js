const { prisma } = require("../models/prisma");
const jwt = require("jsonwebtoken");

const createOrder = async (req, res) => {
  const { shipment_id, cart_id } = req.body;
  const token = req.headers.authorization;
  const customer_id = jwt.verify(token, process.env.JWT_SECRET);

  // Sum Total Price
  let totalPrice = 0;
  const getCart = await prisma.cart.findUnique({
    where: { cart_id },
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

  const sumerizes = getCart.cart_item.map((cart_item) => {
    const price = Number(cart_item.product_detail.product.product_price);
    const subTotal = price * cart_item.quantity;
    return { subTotal };
  });

  for (let sum of sumerizes) {
    totalPrice += sum.subTotal;
  }

  // Create Order
  try {
    const createOrder = await prisma.order.create({
      data: {
        customer_id: customer_id.userId,
        shipment_id,
        cart_id,
        total_price: String(totalPrice),
      },
      include: {
        customer: {
          include: {
            address: true,
          },
        },
        cart: {
          include: {
            cart_item: true,
          },
        },
        shipment: {
          include: {
            ship_provider: true,
          },
        },
      },
    });

    console.log("Create Order successfuly!", createOrder);
    return res.status(200).send({
      message: "Create order success!",
      data: {
        data: createOrder,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Create order failed, try again later",
    });
  }
};

module.exports = { createOrder };
