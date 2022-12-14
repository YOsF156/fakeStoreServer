const userDl = require("../DL/controller/userController")
const jwtFn = require("../middleware/jwtFn")

async function createuser(data) {
    if (!data.userName || !data.password) throw { message: "missing details" }
    const isExist = await userDl.read({ userName: data.userName })
    console.log("馃殌 ~ file: userLogic.js:7 ~ createuser ~ isExist", isExist)
    if (isExist[0]) throw { message: "user already exists" }
    const user = await userDl.create(data)
    const token = await jwtFn.createToken(user._id)
    return token
}

async function getAllusers() {
    return await userDl.read({})//讗讜讘讬讬拽讟 专讬拽 诪讞讝讬专 讗转 讻诇 讛专砖讜诪讜转
}

module.exports = { createuser, getAllusers }// 讬讬爪讜讗 讻诇 讛驻讜谞拽爪讬讜转 讜讗诇讜 砖注讜讚 讬爪讟专驻讜 诪讘讬讝谞住 诇讜讙'讬拽 诇专诪转 专讗讜讟专 砖讬诇诪讚 讘讛诪砖讱
