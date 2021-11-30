const express = require("express");
const router = express.Router();

const { index, admin } = require("../controllers/indexController");
const adminLog = require("../middlewares/adminLogs");

router.get("/", index);
router.post("/admin", adminLog, admin);
module.exports = router;
