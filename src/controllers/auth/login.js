require("dotenv").config()
const jwt = require('jsonwebtoken')
const db = require("../../config/db")
const bcrypt = require('bcrypt');
const saltRounds = 10;

function login (req, res){

    db.query("SELECT id, password FROM users WHERE email = ?", [req.body.email], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        if (results.length == 0)
            return res.status(404).send("user don't exist")
        console.log(results)
        bcrypt.compare(req.body.password, results[0].password, function(err, result) {
            if (result == false)
                return res.status(400).send("password or email incorrect")
            var token = jwt.sign( { userId: results[0].id }, process.env.JWT_SECRET);
            return res.status(200).json({userId:results[0].id, token:token})
                
        });
        
    });

}

module.exports = login