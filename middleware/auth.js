const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log("🚀 ~ file: auth.js:6 ~ auth ~  req.headers.authorization", req.headers.authorization)
        jwt.verify(token, process.env.SECRET_JWT, (err, maSHehbeti) => {
            if (err) {
                throw ("invalid");
            }
            req.body.id = maSHehbeti._id
            next();
        });

    } catch (err) {
        console.log("🚀 ~ file: auth.js ~ line 16 ~ auth ~ err", err)
        res.status(401).json({
            error: 'Invalid request!'
        });
    }

    // } catch {
    //     res.status(401).json({
    //         error: 'Invalid request!'
    //     });
    // }
}

module.exports = auth;
