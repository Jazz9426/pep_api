const db = require("../../config/db")

function userFind (req, res){

    db.query("SELECT firstName, lastName, email FROM users WHERE id = ?", [req.query.id], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        if (results.length == 0)
            return res.status(404).send("user don't exist anymore")

        res.status(200).json(results[0])
    })

}

module.exports=userFind