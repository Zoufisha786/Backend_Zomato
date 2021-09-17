const express = require('express');
const router = express.Router();

const LocationController = require('../Controllers/Location');
const mealTypesController = require('../Controllers/MealTypes');
const resturantController = require('../Controllers/Resturant');
const UsersController = require('../Controllers/Users');
const PaytmController = require('../Controllers/PaymentGateway');
const CityController = require('../Controllers/CityList');

router.get('/location',LocationController.getLocation);
router.post('/add',LocationController.addLocation);
router.get('/mealTypes',mealTypesController.getMealTypes);
router.get('/resturantbylocation/:locationId',resturantController.getResturantByLocation);
router.post('/filter',resturantController.filterResturants);
router.get('/resturantbyid/:resturantId',resturantController.getResturantDetailsById);
router.get('/getMenu/:resturantId',resturantController.getMenu);
router.post('/createUser',UsersController.createUser);
router.post('/login',UsersController.loginUser);
router.post("/payment", PaytmController.payment);
router.post("/callback", PaytmController.callback);
router.get('/citylist',CityController.getCity);

module.exports = router;

