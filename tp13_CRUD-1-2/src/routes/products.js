// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");

const multer = require("multer");
// ************ Controller Require ************
const {
    index,
    create,
    store,
    detail,
    edit,
    update,
    destroy,
} = require("../controllers/productsController");

//Upload files
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "../../public/images/products"));
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-'+ Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({
    storage,
});

/*** GET ALL PRODUCTS ***/
router.get("/", index);

//[>** CREATE ONE PRODUCT **<]
router.get("/create", create);
router.post("/create", upload.single("file_image"), store);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", detail);

//[>** EDIT ONE PRODUCT **<]
router.get("/edit/:id", edit);
router.put("/edit/:id", update);

//[>** DELETE ONE PRODUCT**<]
router.delete("/delete/:id", destroy);

module.exports = router;
