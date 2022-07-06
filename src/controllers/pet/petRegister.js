const db = require("../../config/db")
const bcrypt = require('bcrypt');
const saltRounds = 10;

function petRegister(req, res){

    db.query("INSERT INTO pets (userId, name, birth, address, clinicNumber, phoneNumber, description, tag) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)" , 
    [req.userId, req.body.name , req.body.birth.slice(0, 10) , req.body.address, req.body.clinicNumber, req.body.phoneNumber, req.body.description, req.body.tag],
    (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        return res.status(201).send("pet created")
    })
}

module.exports = petRegister