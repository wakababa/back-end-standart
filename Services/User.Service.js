
const UsersMockData = require("../MockData")

async function GetOne(userId){
    return UsersMockData.filter(user=> user.id === parseInt(userId))
}

module.exports = {
    GetOne,
}
