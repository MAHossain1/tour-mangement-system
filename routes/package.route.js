const express = require("express");
const router = express.Router();
const packageController = require("../controllers/package.controller");

router.route("/bulk-upload").patch(packageController.createPackages);

router.route("/").post(packageController.createAPackage);

module.exports = router;
