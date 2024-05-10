const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { prisma } = require("../models/prisma");
const { transporter, generateCode } = require("../lib/nodemailer");



const cartUpdate = async (req, res) => {
    const dataProfile = req.params.id;
    const {product_id, product_size_id, product_color_id, product_stock} = req.body;

    const updated = await prisma.product_Details.upsert({
        where: {
            product_details_id: Number(dataProfile)            
        },
        update: {
            product_id: product_id,
            product_size_id: product_size_id,
            product_stock: product_stock,
            product_color_id: product_color_id
        },
        create: {
            product_id: product_id,
            product_size_id: product_size_id,
            product_stock: product_stock,
            product_color_id: product_color_id           
        }
    });

    return res.status(201).send({
        message: "Cart item updated!"
    });
}

const cartInfo = async (req, res) => {

    const dataProfile = req.params.id
    const listing = await prisma.product_Details.findMany({
        where: {
            cart_id: Number(dataProfile)
        }        
    });
    
    return res.status(200).send({
        message: 'Cart info retrieved!',
        data: listing
    })
    
};

module.exports = { cartInfo, cartUpdate }