const Shop = require('../models/shop');
const Menu = require('../models/menu')
const config = require('../config/index');


exports.index = async (req, res, next) => {

    const shop = await Shop.find().select('name photo location').sort({ _id: -1 });
    const shopWithPhotoDomain = await shop.map((shop, index) => {
        return {
            id: shop._id,
            name: shop.name,
            photo: config.DOMAIN + '/public/images/' + shop.photo,
            location: shop.location

        }
    });
    return res.status(200).json({
        data: shopWithPhotoDomain
    });

}
//get menu with shop
exports.menu = async (req, res, next) => {
    const menu = await Menu.find().populate('shop', 'name location').sort({ _id: -1 });

    return res.json({
        data: menu
    })
}

exports.getShopWithMenu = async (req, res, next) => {
    const ShopWithMenu = await Shop.findOne({ _id: req.params.id }).populate('menus');
    return res.json({
        data: ShopWithMenu
    })
}
// add shop
exports.addShop = async (req, res, next) => {

    const shop = new Shop(req.body);
    await shop.save();
    return res.status(201).json({
        massage:"add complete"
    });
}