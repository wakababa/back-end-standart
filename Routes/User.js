const express = require('express')
const router = express.Router()

const  {
    GetOne,
} = require('../Controllers/User.Contoller')

router.get('/:id', GetOne)

module.exports = router
