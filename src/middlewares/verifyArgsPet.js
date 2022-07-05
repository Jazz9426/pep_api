const verifyArgs= require("./verifyArgs")

function petRegister(req, res, next){
    if (!verifyArgs(req.body,[ "name", "age", "address", "phoneNumber", "clinicNumber", "tag" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}

function petDelete(req, res, next){
    if (!verifyArgs(req.query, [ "id" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}

function petListFind(req, res, next){
    if (!verifyArgs(req.query,[ "userId" ])){
        console.log("issou")
        res.status(400).send("Bad Request")
        return
    }
    next()
}

function petPut(req, res, next){
    if (!verifyArgs(req.body,["name", "age", "address", "phoneNumber", "clinicNumber", "description", "tag" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}

function petFind(req, res, next){
    if (!verifyArgs(req.query,[ "id" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}


module.exports = {
    petRegister: petRegister,
    petDelete: petDelete,
    petListFind: petListFind,
    petPut: petPut,
    petFind: petFind,
}