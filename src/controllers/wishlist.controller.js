const { prisma } = require("../models/prisma");

const wishlistInfo = async (req, res) => {
  const wishlist_id = Number(req.params.id);

  const listing = await prisma.wishlist.findMany({
    where: {
      wishlist_id,
    },
    include: {
      product: true,
    },
  });

  return res.status(200).send({
    message: "Cart info retrieved!",
    data: listing,
  });
};

const updateWishList = async (req, res) => {
  const wishlist_id = Number(req.params.id);
  const product_id = Number(req.body.product_id);
  const action = req.body.action;

  if (!product_id) {
    return res.status(400).send({
      message: "Error: field product_id invalid",
    });
  }

  if (!action) {
    return res.status(400).send({
      message: "Error: field action invalid",
    });
  }

  try {
    switch (action) {
      case "add":
        // add product to wishlist
        const addToWishlist = await prisma.wishlist.update({
          where: {
            wishlist_id,
          },
          data: {
            product: {
              connect: {
                product_id,
              },
            },
          },
          include: {
            product: true,
          },
        });

        return res.status(200).send({
          message: "Product added to wishlist!",
          data: {
            wishlist: addToWishlist,
          },
        });

      case "remove":
        // remove product from wishlist
        const removeFromWishlist = await prisma.wishlist.update({
          where: {
            wishlist_id,
          },
          data: {
            product: {
              disconnect: {
                product_id,
              },
            },
          },
          include: {
            product: true,
          },
        });

        return res.status(200).send({
          message: "Product removed from wishlist!",
          data: {
            wishlist: removeFromWishlist,
          },
        });

      default:
        break;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { wishlistInfo, updateWishList };
