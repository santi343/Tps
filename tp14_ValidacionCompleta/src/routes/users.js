var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");
const { users, register, processRegister } = require("../controllers/usersController");
const registerValidator = require("../validations/registerValidator");

//Config Multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "../../public/images"));
    },
    filename: (req, file, callback) => {
        callback(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage });

/* GET users listing. */
router.get('/', users);
router.get("/register", register);
router.post(
    "/register",
    upload.single("photo"),
    registerValidator,
    processRegister
);
module.exports = router;

//Ver bien el tema de las rutas
