const WEB3 = require('web3')
const web3 = new WEB3(new WEB3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'))

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

//No privateKey is needed here because we are just listening for events.

newContract.events.transactionIsDone((err, events) => {
    console.log(err)
    console.log(events)
})