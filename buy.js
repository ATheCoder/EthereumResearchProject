const WEB3 = require('web3')
const web3 = new WEB3(new WEB3.providers.HttpProvider('https://ropsten.infura.io/v3/3bc2291e35854991b8070f7cc881bf5b'))

let newContract = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [],
		"name": "makeTransactionDone",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "payForItem",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "timeIsUp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_buyer",
				"type": "address"
			},
			{
				"name": "_seller",
				"type": "address"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "isDone",
				"type": "bool"
			}
		],
		"name": "transactionIsDone",
		"type": "event"
	}
], '0x5a60dbd5ce93d109c4567ccb5852e127b7e0ad44')

web3.eth.accounts.wallet.add('0xEE27037D33753C5047A845A05721478A9BE5C4616BB606C055603456083F1213')

newContract.methods.payForItem().send({from: '0x401B3847ffff76d444f2a935F3e747055f76a7d4', value: '500000000000000000', gasPrice: '1000000000', gas: '1000000'}, (err, result) => {
    console.log(err)
    console.log(result)
})