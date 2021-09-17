const { output, response } = require('express');
const ResturantData =  require('../Model/Resturant');
const Items = require('../Model/Items');

exports.getResturantByLocation= (req,res) => {
    const locationId = req.params.locationId;
    ResturantData.find({location_id: locationId}).then(output =>
        {
            res.status(200).json({message: "Fetched",resturant:output});
        }).catch(
            err =>
            res.status(500).json(err)
        )  
}

exports.getResturantDetailsById = (req,res) => {
    const resturantId = req.params.resturantId;
    ResturantData.findById(resturantId)
    .then(output =>
        {
            res.status(200).json({message: "Fetched",resturant:output});
        }).catch(
            err =>
            res.status(500).json(err)
        )
    
}
exports.filterResturants = (req,res) =>
{
    const reqBody = req.body;
    const locationId = reqBody.locationId;
    const mealTypeId = reqBody.mealTypeId;
    const cuisine = reqBody.cuisine;
    const lCost = reqBody.lCost;
    const hCost = reqBody.hCost;
    const sort = reqBody.sort ? reqBody.sort : 1;
    const pagination =reqBody.pagination ? reqBody.pagination : 1;

    let payload = {};
    const itemsPerPage = 2;
    let startIndex = (pagination * itemsPerPage -2);
    let endIndex = ( pagination * itemsPerPage );

    if(mealTypeId)
    {
        payload = {mealtype_id: mealTypeId}
    }

    if(mealTypeId && cuisine)
    {
        payload = {mealtype_id: mealTypeId,cuisine : cuisine}
        console.log(payload);
    }

    if(locationId && mealTypeId)
    {
        payload = { mealtype_id : mealTypeId , location_id:locationId}
        console.log(payload);
    }
    if(locationId && mealTypeId && cuisine)
    {
        payload = { mealtype_id : mealTypeId , location_id:locationId,cuisine : cuisine}
    }
    if(mealTypeId && lCost && hCost)
    {
        payload = { mealtype_id : mealTypeId , 
            min_price : { $lte : hCost, $gte :  lCost}
        }
    }
    if(locationId && mealTypeId && lCost && hCost)
    {
        payload = { mealtype_id : mealTypeId , location_id:locationId,
            min_price : { $lte : hCost, $gte :  lCost}}
    }
    if(locationId && mealTypeId && lCost && hCost  && cuisine )
    {
        payload = { mealtype_id : mealTypeId , location_id:locationId,
            min_price : { $lte : hCost, $gte :  lCost},
            cuisine : cuisine }
    }
   console.log(mealTypeId);
    ResturantData.find(payload).sort({min_price : sort})
    .then(response =>
        {
            const filterRes = response.slice(startIndex,endIndex); 
            res.status(200).json({message: "Fetched",resturant:filterRes});
        }).catch(
            err =>
            res.status(500).json(err)
        )
}


exports.getMenu = (req,res) => {
    const resturantId = req.params.resturantId;
    Items.find({resturantId : resturantId})
    .then(response =>
        {
            res.status(200).json({message: "Fetched",items:response});
        }).catch(
            err =>
            res.status(500).json({error :err})
        )
    
}