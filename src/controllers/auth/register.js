const db = require("../../config/db")
const bcrypt = require('bcrypt');
const saltRounds = 10;

function register(req, res){

    db.query("SELECT id FROM users WHERE email = ?", [req.body.email], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        if (results.length > 0)
            return res.status(409).send("user already exist")

        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            if (err)
                return res.status(500).send("Big zouk in hashing")
            db.query("INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)" , 
            [req.body.firstName , req.body.lastName , req.body.email, hash],
            (err, results) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send("Big zouk in db")
                }
                return res.status(201).send("user created")
            })
    }); 
    });
}

module.exports = register