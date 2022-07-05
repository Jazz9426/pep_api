const db = require("../../config/db")

function petFind (req, res){

    db.query("SELECT userId, name, age, address, clinicNumber, phoneNumber, description, tag FROM pets WHERE id = ?", [req.query.id], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        if (results.length == 0)
            return res.status(404).send("this pet don't exist anymore")

        res.status(200).json(results[0])
    })

}

module.exports=petFind