
var InsightProtocol = artifacts.require("./petconomy.sol");



module.exports = function(deployer, network, accounts) {

  deployer.deploy(Petcoin, 'PCO', 'PETCONOMY', accounts[0]);

};
