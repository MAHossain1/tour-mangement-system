const {
  createPackagesService,
  createAPackageService,
  updateByIdPackageService,
  getPackageByIdService,
  getPackagesService,
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

exports.getPackages = async (req, res, next) => {
  try {
    let filters = { ...req.query };

    const excludedSearch = ["sort", "limit", "fields", "page"];
    excludedSearch.forEach(searchItem => delete filters[searchItem]);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
      console.log(fields);
    }

    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const result = await getPackagesService(filters, queries);
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
