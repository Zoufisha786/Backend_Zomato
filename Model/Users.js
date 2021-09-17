const mongo = require('mongoose');
const Schema = mongo.Schema;
const usersSchema = Schema({
        email: {
            type: String
        },
        password: {
            type: String
        },
        firstName:
        {
            type:String
        },
        lastName:
        {
            type:String
        }
});
module.exports = mongo.model('User',usersSchema,'Users');