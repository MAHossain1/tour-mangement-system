const Package = require("../models/Package");
const tourPackage = require("../data/tourPackage.json");

exports.createPackagesService = async () => {
  const packages = [];

  tourPackage.forEach(package => {
    packages.push(Package.create(package));
  });

  const result = await Promise.all(packages);
  return result;
};

exports.getPackagesService = async (filters, queries) => {
  console.log("where?", filters);
  // console.log(queries.fields);

  const packages = await Package.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const totalPackage = await Package.countDocuments(filters);
  const page = Math.ceil(totalPackage / queries.limit);

  return { totalPackage, page, packages };
};

exports.createAPackageService = async data => {
  const result = await Package.create(data);
  return result;
};

exports.getPackageByIdService = async tourId => {
  const result = await Package.findOne({ _id: tourId });
  const updatedPackage = await Package.findByIdAndUpdate(
    tourId,
    { $inc: { view_count: 1 } },
    { new: true }
  );
  return { result, updatedPackage };
};

exports.updateByIdPackageService = async (tourId, data) => {
  const result = await Package.updateOne(
    { _id: tourId },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

exports.bulkDeletePackageService = async () => {
  const result = await Package.deleteMany({});
  return result;
};
