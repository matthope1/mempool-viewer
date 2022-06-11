// 1: access env vars
require('dotenv').config()

const INFURA_WS = process.env.INFURA_WS

console.log("infura ws", INFURA_WS)

// 2: connect to network with web3
const Web3 = require('web3');
const web3 = new Web3(
	new Web3.providers.WebsocketProvider(INFURA_WS)) 

// 3: grab block numbers
web3.eth.subscribe('newBlockHeaders')
	.on('data', async block => {
		console.log("block number: ", block.number)
	})
	.on('error', err => {
		console.log("Error: ", err)
	})

web3.eth.subscribe('pendingTransactions') 
	.on('data', async tx => {
		console.log("transaction: ", tx)
	})
	.on('error', err => {
		console.log("Error: ", err)
	})