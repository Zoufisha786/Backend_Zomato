const mongo = require('mongoose');
const Schema = mongo.Schema;
const menuItemsSchema = Schema({
        name: {
            type: String,
            required :true
        },
        description: {
            type: String,
            required :true
        },
        resturantId:
        {
            type:String,
            required :true
        },
        image:
        {
            type:String,
            required :true
        },
        qty:
        {
            type:Number,
            required :true
        },
        price:
        {
            type:String,
            required :true
        }

});
module.exports = mongo.model('Item',menuItemsSchema,'Items');