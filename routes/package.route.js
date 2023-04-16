const express = require("express");
const router = express.Router();
const packageController = require("../controllers/package.controller");

router.route("/").post(packageController.createPackage);

module.exports = router;
