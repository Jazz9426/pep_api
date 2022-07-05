const db = require("../../config/db")

function petListFind (req, res){

    db.query("SELECT id FROM users WHERE id = ?", [req.query.userId], (userErr, usersResults) => {
        if (userErr) {
            console.log(userErr)
            return res.status(500).send("Big zouk in db")
        }

        if (usersResults.length === 0)
            return res.status(404).send("user does not exists")
        
        db.query("SELECT * FROM pets WHERE userId = ?", [req.query.userId], (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send("Big zouk in db")
            }

            res.status(200).json(results)
        })
    })

}

module.exports=petListFind