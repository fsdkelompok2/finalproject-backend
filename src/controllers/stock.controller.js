const { prisma } = require("../models/prisma");

// Deacrease Stock Product (after order/payment success)
const decreaseStock = async (req, res) => {
  const { cart_id } = req.body;
  const cartItems = await prisma.cart_Item.findMany({
    where: { cart_id },
  });

  for (let cartItem of cartItems) {
    try {
      const updateStock = await prisma.product_Details.update({
        where: { cart_item: cartItem },
        data: {
          product_stock: {
            decrement: cartItem.quantity,
          },
        },
      });

      console.log("Update Stock successfuly!", updateStock);
      return res.status(200).send({
        message: "Update stock product success!",
        data: createOrder,
      });
    } catch (error) {
      console.error("Error: Update Stock failed!", error);
    }
  }
};

module.exports = { decreaseStock };
