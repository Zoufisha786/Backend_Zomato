
const { response } = require('express');
const LocationData =  require('../Model/Location');


exports.getLocation = (req,res) => {
    LocationData.find().then(response =>
        {
            res.status(200).json(response);
        }).catch(
            err =>
            res.status(500).json(err)
        )
    
}
exports.addLocation = (req,res) =>
{
    const reqBody = req.body;
    const name = reqBody.name ;
    const rno =reqBody.rno;
     const locationD = new LocationData({name,rno});
     locationD.save().then(respo =>
        {
            res.status(200).json({message : "Successfull",location : response})
        }).catch(err =>
            {
                res.status(500).json({message : "Error",location : err})   
            })
}
