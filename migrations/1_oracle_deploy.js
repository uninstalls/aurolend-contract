const SimplePriceOracle = artifacts.require("SimplePriceOracle");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
