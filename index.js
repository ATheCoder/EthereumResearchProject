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
		"name": "timeIsUp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
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
], '0x1719380e48a45b85f92fc688f78161b19d59337e')

web3.eth.accounts.wallet.add('0xEE27037D33753C5047A845A05721478A9BE5C4616BB606C055603456083F1213')

//web3.eth.accounts.wallet.add('0x4F3CB73A514919D5C9AD3AE8E36891D3F185694EFB528D2B53D04CD4E5E2EAD8')

newContract.methods.makeTransactionDone().send({from: '0xAC411737801906d6b720fcd59B0FC3665519bE91', gasPrice: '1000000000', gas: '1000000'},(err, result) => {
    console.log(err)
    console.log(result)
})