const router = require("express").Router();
const auth = require('./auth.route');
const prod = require('./product.route');
const mat = require('./matprem.route');
const order = require('./order.route');
// const category = require('./category.route');

router.use('/user', auth);
// router.use('/category/', category);
router.use('/', prod);
router.use('/', mat);
router.use('/orders',order);
module.exports = router;