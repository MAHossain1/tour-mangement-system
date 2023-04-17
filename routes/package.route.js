const express = require("express");
const router = express.Router();
const packageController = require("../controllers/package.controller");

router.route("/bulk-upload").patch(packageController.createPackages);

router
  .route("/")
  .get(packageController.getPackages)
  .post(packageController.createAPackage);

router
  .route("/:id")
  .get(packageController.getPackageById)
  .patch(packageController.updatePackageById);

module.exports = router;
