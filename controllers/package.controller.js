const {
  createPackagesService,
  createAPackageService,
  updateByIdPackageService,
  getPackageByIdService,
} = require("../services/package.service");

exports.createPackages = async (req, res, next) => {
  try {
    const result = await createPackagesService();

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

exports.createAPackage = async (req, res, next) => {
  try {
    const result = await createAPackageService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data inserted failed",
      error: error.message,
    });
  }
};

exports.getPackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getPackageByIdService(id);
    res.status(200).json({
      status: "success",
      message: "Data Get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data get failed",
      error: error.message,
    });
  }
};

exports.updatePackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await updateByIdPackageService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data updated failed",
      error: error.message,
    });
  }
};
