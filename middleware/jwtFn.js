const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_JWT


async function createToken(_id) {
    const accessToken = await jwt.sign({ _id }, secret, { expiresIn: "10m" })
    return accessToken
}

function validateToken(token) {
    return jwt.verify(token, secret)
}


module.exports = { createToken, validateToken }