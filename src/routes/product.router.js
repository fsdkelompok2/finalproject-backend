const express = require('express');
const {readAllProduct, readProduct, readGambarProduct, readWarnaProductProduct, readDaftarSizeProduct, createAddToBag, createFavourite} = require('../controllers/product.controller');

const router = express.Router();

router.get('/readAllProduct', readAllProduct)
router.get('/readProduct/:id', readProduct)
router.get('/readGambarProduct/:id', readGambarProduct)
router.get('/readWarnaProductProduct/:id', readWarnaProductProduct)
router.get('/readDaftarSizeProduct/:id', readDaftarSizeProduct)
router.post('/createAddToBag', createAddToBag)
router.post('/createFavourite', createFavourite)

module.exports = router;