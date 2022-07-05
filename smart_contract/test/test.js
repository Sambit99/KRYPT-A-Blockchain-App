// const hre = require("hardhat");
// const assert = require("assert");
// let accounts;
// let Transactions;

// beforeEach(async () => {
//   accounts = await hre.ethers.getSigners();
//   const TransactionFactory = await hre.ethers.getContractFactory(
//     "Transactions"
//   );
//   Transactions = await TransactionFactory.deploy();
//   await Transactions.deployed();
// });

// describe("Transactions", () => {
//   it("Should deploy a contract", () => {
//     assert.ok(Transactions.address);
//   });

//   it("Should get the Managers address", async () => {
//     const manager = await Transactions.manager();
//     assert.equal(manager, accounts[0].address);
//   });

//   it("Should get the Empty Trancations", async () => {
//     const AllTransactions = await Transactions.getAllTransactions();
//     assert.equal(AllTransactions.length, 0);
//   });

//   it("Should get the Empty Count", async () => {
//     const AllTransactionCount = await Transactions.getAllTransactionCount();
//     assert.equal(AllTransactionCount, 0);
//   });

//   it("Should add new Transaction to allTransactions ", async () => {
//     const transferTxn = await Transactions.connect(accounts[0]).transferMoney(
//       accounts[1].address,
//       1,
//       "Transfer of money from Owner to SomeoneElse",
//       "Send"
//     );
//     await transferTxn.wait();
//     const AllTransactions = await Transactions.getAllTransactions();
//     assert.equal(AllTransactions.length, 1);
//   });
// });
