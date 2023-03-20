# Arbitrage_Bot_JS_v1
* Still in `Development.`
This bot monitors the Uniswap DEX for arbitrage opportunities and executes trades on the DEX when it identifies an opportunity. It uses the Uniswap API to fetch data about token prices and pairs, and the `FlashLoanArbitrage` contract to execute trades on DyDxPool.

## Flowchart
![Alt text](https://i.postimg.cc/YSZ2fXjT/arbflow.png)


## Dependencies

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Alchemy](https://www.alchemy.com/) (Blockchain Connection)

## Setting Up
### 1. Clone/Download the Repository
`https://github.com/SleekGeek-254/Arbitrage_Bot_JS_v1.git`

### 2. Install Dependencies:
`npm install`

### 3. Create and Setup .env

- **ALCHEMY_API_KEY=""**
- **ARB_FOR="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"** (By default we are using WETH)
- **ARB_AGAINST="0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"** (By default we are using SHIB)
- **PRIVATE_KEY=""** (Private key of the account to recieve profit/execute arbitrage contract)
- **PRICE_DIFFERENCE=0.50** (Difference in price between Uniswap & Sushiswap, default is 0.50%)
- **UNITS=0** (Only used for price reporting)
- **GAS_LIMIT=600000** (Currently a hardcoded value, may need to adjust during testing)
- **GAS_PRICE=0.00000006** (60 Gwei, Currently a hardcoded value, may need to adjust during testing)

### 4. Start Hardhat Node:
In your terminal run:
`npx hardhat node`

Once you've started the hardhat node, copy the private key of the first account as you'll need to paste it in your .env file in the next step.

### 5. Add Private Key to .env
Copy the private key of the first account provided from the hardhat node, and paste in the value for the **PRIVATE_KEY** variable in your .env file

### 6. Deploy Smart Contract
In a separate terminal run:
`npx hardhat run scripts/deploy.js --network localhost`

Sometimes the deployed address may be different when testing, and therefore you'll need to update the **ARBITRAGE_ADDRESS** inside of the *config.json* 

### 7. Start the Bot
`node bot.js`

### 8. Manipulate Price
In another terminal run:
`npx hardhat run scripts/manipulate.js --network localhost`

## About config.json
Inside the *config.json* file, under the PROJECT_SETTINGS object, there are 2 keys that hold a boolean value:
- isLocal
- isDeployed

The bot will run continuously and automatically execute trades when it identifies an arbitrage opportunity.

## Testing Bot on Mainnet
For monitoring prices and detecting potential arbitrage opportunities, you do not need to deploy the contract. 

### 1. Edit config.json
Inside the *config.json* file, set **isDeployed** to **false** and **isLocal** to **false**.

### 2. Create and Setup .env
See step #4 in **Setting Up**

### 3. Run the bot
`node bot.js`


## Customization

You can customize the bot's behavior by modifying the `findArbitrageOpportunities` function in `index.js`. This function is called periodically to check for arbitrage opportunities, and you can implement your own strategies for identifying opportunities using the data provided by the Uniswap API.

## Disclaimer

This bot is provided as an example and is not intended to be used in production. Use at your own risk.

*As a reminder, do **NOT** use or fund the accounts/keys provided by the hardhat node in a real production setting, they are to be only used in your local testing!*

