// hardhat.config.js

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.6",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    fuji: {
      url: "https://old-thrumming-patron.avalanche-testnet.discover.quiknode.pro/d7546e19a4c894c7704d3e610c001d39175e18da/ext/bc/C/rpc/",
      accounts: [
        `0x` +
          "fb45404d140d35993de475a0c9d2f7f19311a21e9b9b6d1d4f3b45783baf3b3f",
      ],
      chainId: 43113,
    },
  },
};
