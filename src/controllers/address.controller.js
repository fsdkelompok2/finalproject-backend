const { prisma } = require("../models/prisma");
const jwt = require("jsonwebtoken");

const createAddress = async (req, res) => {
  const { street, building, city, postcode, province, phone, country } =
    req.body;
  const token = req.headers.authorization;
  const customer_id = jwt.verify(token, process.env.JWT_SECRET);

  try {
    const createAddress = await prisma.customer.update({
      where: { customer_id: customer_id.userId },
      data: {
        address: {
          create: {
            street,
            building,
            city,
            postcode,
            province,
            phone,
            country,
          },
        },
      },
      include: {
        address: true,
      },
    });

    console.log(createAddress);
    return res.status(200).send({
      message: "Create address success!",
      data: createAddress,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Create address failed, try again later",
    });
  }
};

const updateAddress = async (req, res) => {
  const { street, building, city, postcode, province, phone, country } =
    req.body;

  const token = req.headers.authorization;
  const customer_id = jwt.verify(token, process.env.JWT_SECRET);

  try {
    const createAddress = await prisma.customer.update({
      where: { customer_id: customer_id.userId },
      data: {
        address: {
          update: {
            where: { customer_id: customer_id.userId },
            data: {
              street,
              building,
              city,
              postcode,
              province,
              phone,
              country,
            },
          },
        },
      },
      include: {
        address: true,
      },
    });

    console.log(createAddress);
    return res.status(200).send({
      message: "Update address success!",
      data: createAddress,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Update address failed, try again later",
    });
  }
};

module.exports = { createAddress, updateAddress };
