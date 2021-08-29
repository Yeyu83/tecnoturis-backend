const routes = require('express').Router();
const { HotelController } = require('../controllers/');

routes.route('/').get(HotelController.getHotels);

module.exports = routes;