const routes = require('express').Router();
const { UserController } = require('../controllers/');

routes.route('/:userId').get(UserController.getUser);

module.exports = routes;