const db = require("../../config/db")

function petDelete (req, res){

    db.query("SELECT userId FROM pets WHERE id = ?", [req.query.id], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        if (results.length == 0)
            return res.status(404).send("user don't exist anymore")

        if (results[0].userId != req.userId)
            return res.status(401).send("cannot delete another user's pets")

        db.query("DELETE FROM pets WHERE id = ?", [req.query.id], (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send("Big zouk in db")
            }
            
            res.status(200).send("pet sucessfully deleted")
        })
    })


    

}

module.exports=petDelete