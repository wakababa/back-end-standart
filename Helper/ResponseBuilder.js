function success(res, data) {
    console.log(data)
    return res.status(200).json(data)
}

function error(res, data) {
    return res.status(data.statusCode).json(data)
}


module.exports = {success, error};
