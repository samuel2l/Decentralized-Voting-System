# Decentralized Voting Application



## Installation

Clone repo and install packages
```shell
npm install
```

Compile and deploy contract on sepolia. To do this you will need sepolia test eth

```shell
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js
```

Copy the deployed contract address and copy it into a .env file

Add private key as well to .env

Example .env
```shell
API_URL=https://sepolia.infura.io/v3/<YOUR_INFURA_API_KEY>
PRIVATE_KEY=<PRIVATE_KEY_FROM_WALLET_PROVIDER>
CONTRACT_ADDRESS=<DEPLOYED_CONTRACT_ADDRESS>

```


```shell
npm start
```
