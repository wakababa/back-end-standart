const jwt = require("jsonwebtoken")


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']

    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET , (err , user ) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}
