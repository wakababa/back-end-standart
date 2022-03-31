const sequelize = require('sequelize');


const User = sequelize.define('user', {
    firstName: {
        type: sequelize.STRING,
        field: 'first_name'
    },
    lastName: {
        type: sequelize.STRING,
        field: 'first_name'
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});


module.exports = User

