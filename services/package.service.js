const Package = require("../models/Package");

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
  return result;
};

exports.updateByIdPackageService = async (tourId, data) => {
  const result = await Package.updateOne(
    { _id: tourId },
    { $set: data },
    { runValidators: true }
  );
  return result;
};
