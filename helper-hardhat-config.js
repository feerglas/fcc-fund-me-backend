const networkConfig = {
  4: {
    name: 'rinkeby',
    ethUsdPriceFeedAddress: '0x8a753747a1fa494ec906ce90e9f37563a8af630e',
  },
  137: {
    name: 'polygon',
    ethUsdPriceFeedAddress: '0xF9680D99D6C9589e2a93a78A04A279e509205945',
  },
};

const developmentChains = ['hardhat', 'localhost'];

module.exports = {
  networkConfig,
  developmentChains,
};
