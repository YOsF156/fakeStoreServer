const userData = require("../model/UserModel")

async function create(data) {
    return await userData.create(data)
}

async function read(filter, proj) {// proj=text key
    return await userData.find(filter, proj)
}

async function update(filter, newData) {//newData=obj whith the ney data
    return await userData.findOneAndUpdate(filter, newData, { new: true })
}

async function del() {
    return await userData.findOneAndUpdate(filter, { isActive: false })
}


module.exports = { create, read, update, del }