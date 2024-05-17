const { prisma } = require("../models/prisma");
const ProductFilter = require("../utils/productFilterAPI");

const getProducts = async (req, res, next) => {
    try {
        // Permintaan filter product dikirm via query params, 
        // "/products?req_params_one=valueOne&req_params_two=valueTwo"
        
        if (!req.query.page) {
            req.query.page = 1;
        }
        const productsPerPage = 4;
        
        const filterProducts = await new ProductFilter({products: prisma.product, queryStr: req.query}).filter();

        // Variabel untuk menghitung total produk yang ditemukan setelah filter dan setelah di paginasi
        let productsFound = filterProducts.products;

        const totalProductsFound = productsFound.length;
        
        filterProducts.pagination({productsPerPage});
        productsFound = filterProducts.products;
        
        return res.status(200).json({
            totalProductsFound,
            productsPerPage,
            currentPage: req.query.page,
            totalPage: Math.ceil(totalProductsFound / productsPerPage),
            products: productsFound,
        });
    } catch (error) {
        next(error);
    }
}

module.exports  = {
    getProducts
}