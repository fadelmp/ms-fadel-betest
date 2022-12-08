const express = require('express')
const User = require('../controller/user_controller')

const router = express.Router()

router.get('/user/', User.getAllUser)
router.get('/user/account_number/:accountNumber', User.getByAccountNumber)
router.get('/user/identity_number/:identityNumber', User.getByIdentityNumber)

router.post('/user', User.createUser)
router.put('/user', User.updateUser)
router.delete('/user', User.deleteUser)

module.exports = router