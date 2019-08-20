const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');


//localhost:3000/api/shop
router.get('/', shopControllers.index);

//localhost:3000/api/shop/menu
router.get('/menu', shopControllers.menu);

//localhost:3000/api/shop/menu
router.get('/:id', shopControllers.getShopWithMenu);

//localhost:3000/api/shop/addShop
router.post('/', shopControllers.addShop);

module.exports = router;