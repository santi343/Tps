var express = require("express");
var router = express.Router();
const { user, processUser } = require("../controllers/userController");
const { validationUser } = require("../validations/validationUser");

/* GET users listing. */
//router.get('/', function(req, res, next) {
//res.send('respond with a resource');
//});

//Form of login
router.get("/", user);

//Process of login
router.post("/",validationUser, processUser);

module.exports = router;
