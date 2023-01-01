const express = require("express");
const router = express.Router();
const productlogic = require("../BL/productLogic")


router.get("/", async (req, res) => {
    try {

        const AllProducts = await productlogic.getAllProducts()
        res.send(AllProducts)
    } catch (error) {
        res.status(401).send({ error })
    }
})




module.exports = router