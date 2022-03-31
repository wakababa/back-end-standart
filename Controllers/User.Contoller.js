const UserServices = require('../Services/User.Service');
const {success, error} = require("../Helper/ResponseBuilder");

function  GetOne(req, res, next) {
    UserServices.GetOne(req.params.id).then(value=>success(res,value)).catch(err=>  error(res,err))
}

module.exports = {
    GetOne
}


