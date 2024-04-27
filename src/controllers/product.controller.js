const knex = require("../knexmodels/knex")

const readAllProduct = async (req, res) => {
    const allProduct = await knex.select().from('product')

    return res.status(200).send({
        message: "All product data",
        data: allProduct
    })
} 

const readProduct = async (req, res) => {
    const idProduct = req.params.id
    const allProduct = await knex.select().from('product').where('id',idProduct)

    if(allProduct.length == 0){
        return res.send({
            message: "Error, id not found",
            data: null
        })
    }

    return res.status(200).send({
        message: "All product data",
        data: allProduct
    })
} 

const readWarnaProductProduct = async (req, res) => {
    const idProduct = req.params.id
    const allProduct = await knex.select().from('warna_product').where('id_product',idProduct)

    if(allProduct.length == 0){
        return res.send({
            message: "Error, id not found",
            data: null
        })
    }

    return res.status(200).send({
        message: "All product data",
        data: allProduct
    })
} 

const readGambarProduct = async (req, res) => {
    const idProduct = req.params.id
    const allProduct = await knex.select().from('gambar_product').where('id_warna_product',idProduct)

    if(allProduct.length == 0){
        return res.send({
            message: "Error, id not found",
            data: null
        })
    }

    return res.status(200).send({
        message: "All product data",
        data: allProduct
    })
} 

const readDaftarSizeProduct = async (req, res) => {
    const idProduct = req.params.id
    const allProduct = await knex.table('size_product').innerJoin('size', 'size.id', '=', 'size_product.id_size').where('size_product.id_warna_product',idProduct)

    if(allProduct.length == 0){
        return res.send({
            message: "Error, id not found",
            data: null
        })
    }

    return res.status(200).send({
        message: "All product data",
        data: allProduct
    })
} 

const createAddToBag = async (req, res) => {
    const {id_warna_product} = req.body

    if (!id_warna_product){
        return res.status(400).send({
            message: "Input data field, field must not empty"
        })
    }

    const create = await knex('add_to_bag').insert({
        id_warna_product: id_warna_product,
    })

    return res.status(201).send({
        message: "Create siswa succes"
    })
}

const createFavourite = async (req, res) => {
    const {id_warna_product} = req.body

    if (!id_warna_product){
        return res.status(400).send({
            message: "Input data field, field must not empty"
        })
    }

    const create = await knex('favourite').insert({
        id_warna_product: id_warna_product,
    })

    return res.status(201).send({
        message: "Create siswa succes"
    })
}

module.exports = {readAllProduct, readProduct, readGambarProduct, readWarnaProductProduct, readDaftarSizeProduct, createAddToBag, createFavourite}