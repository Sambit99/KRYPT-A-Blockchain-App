// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Transactions{
    address manager;
    uint256 transactionCount;

    constructor(){
        manager = msg.sender;
    }

    event Transfer(address from,address to,uint amount,string message,uint256 timestamp,string keyword);

    struct TransferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] allTransactions;

    function transferMoney(address payable  _reciever,uint256  _amount,string memory  _message,string memory _keyword) public {
        transactionCount += 1;

        TransferStruct memory newTransaction = TransferStruct({
            sender: msg.sender,
            reciever:_reciever,
            amount: _amount,
            message:_message,
            timestamp:block.timestamp,
            keyword:_keyword
        });

        allTransactions.push(newTransaction);
        emit Transfer(msg.sender,_reciever,_amount,_message,block.timestamp,_keyword);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory){
        return allTransactions;
    }
    function getAllTransactionCount() public view returns(uint256){
        return transactionCount;
    }
     
}