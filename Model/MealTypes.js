const mongo = require('mongoose');
const Schema = mongo.Schema;
const mealtypesSchema = Schema({
        name: {
            type: String,
            required :true
        },
        content: {
            type: String,
            required :true
        },
        image: {
            type: String,
            required :true
        },
        meal_type: {
            type: Number,
            required :true
        }
});
module.exports = mongo.model('MealType',mealtypesSchema,'MealTypes');