pragma solidity ^0.5.1;

contract DigitalTrade{
    address owner;
    uint price;
    address payable buyer;
    address payable seller;
    bool payed;
    
    constructor(address payable _buyer, address payable _seller, uint _price) public{
        owner = msg.sender;
        payed = false;
        buyer = _buyer;
        seller = _seller;
        price = _price;
        payed = false;
    }
    
    event transactionIsDone(bool isDone);
    
    function makeTransactionDone() public{
        require(msg.sender == owner, "You cannot do that!");
        seller.transfer(address(this).balance);
        emit transactionIsDone(true);
    }
    
    function payForItem() public payable{
        require(msg.sender == buyer, "You are not the Buyer of This Item!");
        require(msg.value == price, "The Price is not right!");
        payed = true;
    }
    
    function timeIsUp() public{
        require(msg.sender == owner, "You cannot do that!");
        if(payed) buyer.transfer(address(this).balance);
        emit transactionIsDone(false);
    }
}