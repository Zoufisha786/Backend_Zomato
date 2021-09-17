const mongo = require('mongoose');
const Schema = mongo.Schema;
const locationSchema = Schema({
        name: {
            type: String,
            required :true
        },
        rno: {
            type: Number,
            required :true
        }
});
module.exports = mongo.model('Student',locationSchema,'Students');