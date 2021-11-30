const express = require("express");
const Router = express.Router();

const { detail } = require("../controllers/detailController");

Router.get('/:id', detail);

module.exports = Router;
