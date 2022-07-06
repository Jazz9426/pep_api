const db = require("../../config/db")

function petPut (req, res){
    
    db.query("SELECT userId FROM pets WHERE id = ?", [req.query.id], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Big zouk in db")
        }
        if (results.length == 0)
            return res.status(404).send("owner does not exists")

        if (results[0].userId != req.userId)
            return res.status(401).send("cannot modify another user's pets")
            const sql = `UPDATE pets SET name = '${req.body.name}', birth = '${req.body.birth.slice(0, 10)}', address = '${req.body.address}', clinicNumber = '${req.body.clinicNumber}', phoneNumber = '${req.body.phoneNumber}', description = '${req.body.description}', tag = '${req.body.tag}' WHERE id = ${req.query.id}`
            console.log(sql)

            db.query(sql, {}, (err, results) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send("Big zouk in db")
                }
                return res.status(201).send("pet modified")
            })
    })

    
}

module.exports = petPut