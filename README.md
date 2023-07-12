# SmartContract_with_Frontend_Interaction

This repository contains the code for practicing the interaction with the SmartContract_with_Frontend_Interaction smart contract through a website. It includes the `index.js`, `MySmartContract.sol`, and `deploy.js` files.

## Prerequisites

Before running the code, make sure you have the following set up:

- Node.js and npm installed on your machine (https://nodejs.org)
- MetaMask browser extension installed (https://metamask.io)

## Setup

1. Clone this repository or download the ZIP file and extract it.

2. Copy the contents of `index.js` from this repository and paste them into the `index.js` file in the `pages` folder.

3. Copy the contents of `deploy.js` from this repository and paste them into the `deploy.js` file in the `scripts` folder.

4. Install the project dependencies by running the following command in the project directory:

   ```shell
   npm install
## Running the Frontend
 1. Launch the frontend by running the following command in the terminal:
       ```shell
      npm run dev
       ```
    The project will be running on http://localhost:3000/.
 3.  Install and set up MetaMask in your browser. Create a new network in MetaMask using the following details:

  Network Name: <Network Name>
  New RPC URL: http://127.0.0.1:8545/
  Chain ID: 31337
  Currency Symbol: ETH
  
 3.Import an account into MetaMask using the private key obtained from the terminal where you ran npx hardhat node in the previous step.
 4. Visit http://localhost:3000/ in your browser to access the frontend user interface.

## Interacting with the Frontend
Once the frontend is running and MetaMask is set up, you can interact with the SmartContract_with_Frontend_Interaction smart contract using the provided user interface.

The frontend allows you to perform the following actions:

Connect your MetaMask wallet to the website.
View the current balance of the connected account.
Mint new tokens.
Transfer tokens to another address.
Burn tokens to remove them from circulation.
Ensure you have a sufficient ETH balance in your MetaMask account for gas fees when performing transactions.

Note: You can view the transaction details in the deploy terminal where you executed the npx hardhat run --network localhost scripts/deploy.js command.

Disclaimer: This repository is for educational and practice purposes only. Ensure proper security measures and testing before deploying any smart contract to a live network.


   
 
