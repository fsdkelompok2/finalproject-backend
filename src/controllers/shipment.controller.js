const { prisma } = require("../models/prisma");
const jwt = require("jsonwebtoken");

const createShipment = async (req, res) => {
  const { ship_provider_id, address_id } = req.body;
  const token = req.headers.authorization;
  const customer_id = jwt.verify(token, process.env.JWT_SECRET);

  // Create Shipment
  try {
    const createShipment = await prisma.shipment.create({
      data: {
        customer_id: customer_id.userId,
        ship_provider_id,
        address_id,
      },
      include: {
        ship_provider: true,
      },
    });
    console.log("Create Shipment successfuly!", createShipment);
    return res.status(200).send({
      message: "Create Shipment success!",
      data: createShipment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Create shipment failed, try again later",
    });
  }
};

const updateShipment = async (req, res) => {
  const { shipment_id, ship_provider_id } = req.body;

  // Update Shipment
  try {
    const updateShipment = await prisma.shipment.update({
      where: { shipment_id: shipment_id },
      data: {
        ship_provider_id,
      },
      include: {
        ship_provider: true,
      },
    });
    console.log("Update Shipment successfuly!", updateShipment);
    return res.status(200).send({
      message: "Update Shipment success!",
      data: updateShipment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Update shippment failed, try again later",
    });
  }
};

module.exports = { createShipment, updateShipment };
