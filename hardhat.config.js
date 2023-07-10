require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = 'bb77e6176bad9fa43a769290c08e0ba4f0ab75fccbbb8f59e69782ee4749b54d';
const ZEEVE_API_URL = 'https://app.zeeve.io/shared-api/poly/8522de9e286154c1ca74cd1e9d190f7e7400da9adb3a1f44/';
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygon_mumbai: {
      url: ZEEVE_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
}