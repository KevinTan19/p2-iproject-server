const express = require('express')
const router = express.Router()
const Controller = require('../controllers/products-controller')

router.get('/sneakers', Controller.listSneakers)
    // router.get('/brands')

module.exports = router