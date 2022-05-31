const { inputToConfig } = require('@ethereum-waffle/compiler');
const { assert } = require('chai');
const { deployments, ethers, getNamedAccounts } = require('hardhat');

describe('FundMe', async () => {
  let fundMe;
  let deployer;
  let mockV3Aggregator;

  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(['all']);
    fundMe = await ethers.getContract('FundMe', deployer);
    mockV3Aggregator = await ethers.getContract('MockV3Aggregator', deployer);
  });

  describe('constructor', async () => {
    it('sets the aggregator address correctly', async () => {
      const response = await fundMe.priceFeed();
      assert.equal(response, mockV3Aggregator.address);
    });
  });
});
