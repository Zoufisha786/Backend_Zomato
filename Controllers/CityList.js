const { response } = require('express');
const CityData =  require('../Model/Citys');


exports.getCity = (req,res) => {
    CityData.find().then(response =>
        {
            res.status(200).json({message: "Data Fetched",citylist: response});
        }).catch(
            err =>
            res.status(500).json(err)
        )
    
}