# EthereumResearchProject

This is an example of an Oracle for the Ethereum blockchain which runs on the Ropsten testnet.

First a contract is compiled and runned using Remix on Ropsten testnet. (This part is done and is not included in this project)

Remix can use MetaMask's generated address in order to initiate the contract.

### The Contract Code

```
pragma solidity ^0.5.1;

contract DigitalTrade{
    address owner;
    constructor() public{
        owner = msg.sender;
    }
    
    event transactionIsDone(bool isDone);
    
    function makeTransactionDone() public{
        require(msg.sender == owner, "You cannot do that!");
        emit transactionIsDone(true);
    }
    
    function timeIsUp() public{
        require(msg.sender == owner, "You cannot do that!");
        emit transactionIsDone(false);
    }
}
```

When a transaction is done the `makeTransactionDone()` function is called and an event is emited with the returnedValue of true.

When a transaction is expired before being done the `timeIsUp()` function is called and an event is emitted with the returnedValue of false.

The listener.js uses a WebSocket connection to the Infura WebSocket API in order to listen for the events that are emitted by the Contract.

The index.js uses the Infura HTTP API in order to make a call to the `makeTransactionDone()` Contract function.
