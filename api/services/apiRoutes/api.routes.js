const router = require('express').Router()

router.use('/user', require('../controllers/user.controller'))
router.use('/products', require('../controllers/product.controller'))
router.use('/cart', require('../controllers/cart.controller'))
router.use('/wishlist', require('../controllers/wishlist.controller'))
router.use('/cat', require('../controllers/categories.controller'))

module.exports = router