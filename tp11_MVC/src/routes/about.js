const express = require ('express');
const router = express.Router();
const {index} = require('../controllers/aboutController');

router.get('/', index);
module.exports = router;
