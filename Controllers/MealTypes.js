const { response } = require('express')
const MealTypes = require('../Model/MealTypes');
exports.getMealTypes = (req,res) =>
{
       MealTypes.find().then(response =>
        {
            res.status(200).json({message: "Data Fetched",mealtypes: response})
        }).catch(
            err =>
            res.status(500).json(err)
        )
}