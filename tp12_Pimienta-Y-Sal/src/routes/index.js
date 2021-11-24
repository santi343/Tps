const express = require ('express');
const Router = express.Router();

const {index} = require('../controllers/indexController');

Router.get('/', index);

module.exports = Router
