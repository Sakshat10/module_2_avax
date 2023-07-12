// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    address private owner;

    event TransactionSent(address indexed sender, address indexed recipient, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }


    function withdraw() public onlyOwner {
        require(address(this).balance >= 10 ether, "Insufficient balance");

        address payable recipient = payable(owner);
        recipient.transfer(10 ether);
    }

    function sendTransaction(address payable recipient, uint256 amount) public onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");

        recipient.transfer(amount);
        emit TransactionSent(msg.sender, recipient, amount);
    }
}
