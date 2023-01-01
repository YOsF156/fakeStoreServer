const express = require("express");
const router = express.Router();
const userBl = require("../BL/userLogic");
const User = require("../DL/model/UserModel");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
    try {
        console.log(req.body)
        const token = await userBl.createuser(req.body)
        res.send({ token })
    } catch (error) {
        res.status(401).send({ error })
    }
})

router.get("/all-users", auth, async (req, res) => {
    const all = await userBl.getAllusers()
    console.log("🚀 ~ file: userRoute.js:18 ~ router.get ~ all", all)
    res.send(all)
})



module.exports = router