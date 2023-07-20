require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "< Your Alchemy or infura provider",
      accounts: [
        "<Your accounts private key>",
      ],
    },
  },
};
