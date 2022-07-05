const db = require("../../config/db")

function userDelete (req, res){
    if (req.query.id != req.userId)
        return res.status(401).send("cannot delete another user")
    db.query("DELETE FROM users WHERE id = ?", [req.query.id], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        
        res.status(200).send("user sucessfully deleted")
    })

}

module.exports=userDelete