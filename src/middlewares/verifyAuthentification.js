const jwt = require('jsonwebtoken')

function verifyAuthentification(req, res,next){
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            console.log(err)
            return res.status(401).send("token invalid")
        }
        req.userId=decoded.userId
        next()
      });
      
}

module.exports = verifyAuthentification