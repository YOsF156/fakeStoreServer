const userDl = require("../DL/controller/userController")
const jwtFn = require("../middleware/jwtFn")

async function createuser(data) {
    if (!data.userName || !data.password) throw { message: "missing details" }
    const isExist = await userDl.read({ userName: data.userName })
    console.log("🚀 ~ file: userLogic.js:7 ~ createuser ~ isExist", isExist)
    if (isExist[0]) throw { message: "user already exists" }
    const user = await userDl.create(data)
    const token = await jwtFn.createToken(user._id)
    return token
}

async function getAllusers() {
    return await userDl.read({})//אובייקט ריק מחזיר את כל הרשומות
}

module.exports = { createuser, getAllusers }// ייצוא כל הפונקציות ואלו שעוד יצטרפו מביזנס לוג'יק לרמת ראוטר שילמד בהמשך
