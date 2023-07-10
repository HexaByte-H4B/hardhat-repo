require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = 'bb77e6176bad9fa43a769290c08e0ba4f0ab75fccbbb8f59e69782ee4749b54d';
const API_URL = 'https://rpc-mumbai.maticvigil.com/v1/a34db024b9eb4a61273e3dec51d9a73d227c407b';
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygon_mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
}