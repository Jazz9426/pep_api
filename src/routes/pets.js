const express = require('express')
const router = express.Router()
const verifyArgsMiddlewares = require('../middlewares/verifyArgsPet.js')
const verifyAuthentificationMiddlewares = require('../middlewares/verifyAuthentification')
const verifyArgs = require('../middlewares/verifyArgs')
const petFindController = require('../controllers/pet/petFind')
const petListFindController = require('../controllers/pet/petListFind')
const petPutController = require('../controllers/pet/petPut')
const petDeleteController = require('../controllers/pet/petDelete')
const petRegisterController = require('../controllers/pet/petRegister')

router.post("/pet", [
    verifyArgsMiddlewares.petRegister, verifyAuthentificationMiddlewares, petRegisterController
])

router.delete("/pet", [
    verifyArgsMiddlewares.petDelete, verifyAuthentificationMiddlewares, petDeleteController
])

router.get("/pet", [
    verifyArgsMiddlewares.petFind, petFindController
])

router.get("/petList", [
    verifyArgsMiddlewares.petListFind, verifyAuthentificationMiddlewares, petListFindController
])

router.put("/pet", [
    verifyArgsMiddlewares.petPut, verifyAuthentificationMiddlewares, petPutController
])

module.exports = router