const express = require('express');
const router = express.Router();

const order = require('../controllers/order.controller');

router.post('/order', order.sendOrder);
// router.get('/order', order.getAll);

module.exports = router;
