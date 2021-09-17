const mongo = require('mongoose');
const Schema = mongo.Schema;
const resturantSchema = Schema({
        name: {
            type: String
        },
        city: {
            type: String
        },
        location_id: {
            type: Number
        },
        city_id: {
            type: Number
        },
        locality: {
            type: String
        },
        thumb: {
            type: Array
        },
        rating: {
            type: Number
        },
        min_price: {
            type: Number
        },
        contact: {
            type: String
        },
        cuisine: {
            type: Array
        },
        image: 
        {
            type: String
        },
        mealtype_id: {
            type: Number,
            required :true
        }
});
module.exports = mongo.model('Resturant',resturantSchema,'Resturants');