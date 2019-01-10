const Sequelize = require('sequelize');
const {db} = require('../config/db');

const User = db.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.BOOLEAN,
        default:true
    },
    age: {
        type: Sequelize.INTEGER
    },
    phone_number:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING,
        default:'abc@'
    },
    password:{
        type: Sequelize.STRING
    },
});

// force: true will drop the table if it already exists
User.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});


module.exports = User;
