const mongo = require('mongoose');
const Schema = mongo.Schema;
const citySchema = Schema({
        name: {
            type: String,
            required :true
        },
        city_id:
        {
            type:String,
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
module.exports = mongo.model('CityList',citySchema,'CityLists');