const express = require('express')
const router = express.Router()
const loginController = require('../controllers/auth/login')
const registerController = require('../controllers/auth/register')
const verifyArgsMiddlewares = require('../middlewares/verifyArgsUser')
const verifyAuthentificationMiddlewares = require('../middlewares/verifyAuthentification')
const verifyArgs = require('../middlewares/verifyArgs')
const userFindController = require('../controllers/user/userFind')
const userDeleteController = require('../controllers/user/userDelete')

router.post("/register", [
    verifyArgsMiddlewares.register, registerController
])

router.get("/user",[
    verifyArgsMiddlewares.userFind, verifyAuthentificationMiddlewares, userFindController
])

router.delete("/user", [
    verifyArgsMiddlewares.userDelete, verifyAuthentificationMiddlewares, userDeleteController
])

router.post("/login", [
    verifyArgsMiddlewares.login, loginController
])

module.exports = router