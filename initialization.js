const hre = require("hardhat")
require("dotenv").config()

const config = require('../config.json')
const IUniswapV2Router02 = require('@uniswap/v2-periphery/build/IUniswapV2Router02.json')
const IUniswapV2Factory = require("@uniswap/v2-core/build/IUniswapV2Factory.json")

let provider

if (config.PROJECT_SETTINGS.isLocal) {
  provider = new hre.ethers.providers.WebSocketProvider(`ws://127.0.0.1:8545/`)
} else {
  provider = new hre.ethers.providers.WebSocketProvider(`wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`)
}

// -- SETUP UNISWAP/SUSHISWAP CONTRACTS -- //
// Once these contract instances are set up, you can use them to interact with the contract functions and make transactions on the Ethereum blockchain, such as creating new pairs, adding liquidity, swapping tokens, etc.
const uFactory = new hre.ethers.Contract(config.UNISWAP.FACTORY_ADDRESS, IUniswapV2Factory.abi, provider)
const uRouter = new hre.ethers.Contract(config.UNISWAP.V2_ROUTER_02_ADDRESS, IUniswapV2Router02.abi, provider)
const sFactory = new hre.ethers.Contract(config.SUSHISWAP.FACTORY_ADDRESS, IUniswapV2Factory.abi, provider)
const sRouter = new hre.ethers.Contract(config.SUSHISWAP.V2_ROUTER_02_ADDRESS, IUniswapV2Router02.abi, provider)

// -- SETUP PANCAKESWAP/SHIBASWAP CONTRACTS -- //
const pnFactory = new hre.ethers.Contract(config.PANCAKESWAP.FACTORY_ADDRESS, IUniswapV2Factory.abi, provider)
const pnRouter = new hre.ethers.Contract(config.PANCAKESWAP.V2_ROUTER_02_ADDRESS, IUniswapV2Router02.abi, provider)
const shibFactory = new hre.ethers.Contract(config.SHIBASWAP.FACTORY_ADDRESS, IUniswapV2Factory.abi, provider)
const shibRouter = new hre.ethers.Contract(config.SHIBASWAP.V2_ROUTER_02_ADDRESS, IUniswapV2Router02.abi, provider)



const IArbitrage = require('../artifacts/contracts/Arbitrage.sol/Arbitrage.json')
const arbitrage = new hre.ethers.Contract(config.PROJECT_SETTINGS.ARBITRAGE_ADDRESS, IArbitrage.abi, provider)

module.exports = {
  provider,
  uFactory,
  uRouter,
  sFactory,
  sRouter,
  arbitrage,
  pnFactory,
  pnRouter,
  shibFactory,
  shibRouter,
}