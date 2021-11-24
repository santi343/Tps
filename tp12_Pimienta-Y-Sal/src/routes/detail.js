const express = require("express");
const Router = express.Router();

const { detail } = require("../controllers/detailController");

Router.get('/', detail);

module.exports = Router;
