const verifyArgs= require("./verifyArgs")

function login(req, res, next){

    if (!verifyArgs(req.body,[ "email", "password" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}

function register(req, res, next){
    if (!verifyArgs(req.body,[ "firstName", "lastName", "email", "password" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}

function userDelete(req, res, next){
    if (!verifyArgs(req.query,[ "id" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}

function userFind(req, res, next){
    if (!verifyArgs(req.query,[ "id" ])){
        res.status(400).send("Bad Request")
        return
    }
    next()
}

module.exports = {
    login: login,
    register: register,
    userDelete: userDelete,
    userFind: userFind,
}