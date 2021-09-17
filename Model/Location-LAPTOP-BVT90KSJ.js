const mongo = require('mongoose');
const Schema = mongo.Schema;
const locationSchema = Schema({
        name: {
            type: String,
            required :true
        },
        location_id: {
            type: Number,
            required :true
        },
        city:
        {
            type:String,
            required :true
        },
        country_name:
        {
            type:String,
            required :true
        }
});
module.exports = mongo.model('Location',locationSchema,'Locations');