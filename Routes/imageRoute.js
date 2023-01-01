const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        res.send("AllProducts")
    } catch (error) {
        res.status(401).send({ error })
    }
})




module.exports = router