const Package = require("../models/Package");

exports.createPackagesService = async () => {
  const packages = [];

  tourPackage.forEach(package => {
    packages.push(Package.create(package));
  });

  const result = await Promise.all(packages);
  return result;
};

exports.createAPackageService = async data => {
  const result = await Package.create(data);
  return result;
};
