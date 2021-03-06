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

web3.eth.accounts.wallet.add('0x4F3CB73A514919D5C9AD3AE8E36891D3F185694EFB528D2B53D04CD4E5E2EAD8') //This is the PrivateKey of the Contract Creator's Wallet.

newContract.methods.makeTransactionDone().send({from: '0xAC411737801906d6b720fcd59B0FC3665519bE91', gasPrice: '1000000000', gas: '1000000'},(err, result) => {
    console.log(err)
    console.log(result)
})