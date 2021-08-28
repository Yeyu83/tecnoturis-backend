const routes = require('express').Router();
const { UserController } = require('../controllers/');

routes.route('/').post(UserController.createUser);
routes.route('/:id').get(UserController.getUser);

module.exports = routes;