const tourPackage = require("../data/tourPackage.json");
const Package = require("../models/Package");

exports.createPackage = async (req, res, next) => {
  try {
    const packages = [];

    tourPackage.forEach(package => {
      packages.push(Package.create(package));
    });

    const result = await Promise.all(packages);

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't Post Data",
      error: error.message,
    });
  }
};
