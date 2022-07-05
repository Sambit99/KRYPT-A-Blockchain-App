const hre = require("hardhat");
async function main() {
  const [owner, somebodyElse] = await hre.ethers.getSigners();

  const TransactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const Transactions = await TransactionsFactory.deploy();
  await Transactions.deployed();

  console.log(`Transactions Contract Deployed to : ${Transactions.address}`);
  // let allTransactions = await Transactions.getAllTransactions();
  let manager = await Transactions.manager();
  let allTransactions;
  // let manager;

  // console.log(allTransactions);
  console.log(manager);

  const transferTxn = await Transactions.connect(owner).transferMoney(
    somebodyElse.address,
    1,
    "Transfer of money from Owner to SomeoneElse",
    "Send"
  );
  const reciept = await transferTxn.wait();
  //   console.log(reciept.events);

  allTransactions = await Transactions.getAllTransactions();

  console.log(allTransactions);

  // const ts = await Transactions.getAllTransactions();
  // const reciept = await ts.wait();
  // console.log(reciept.events);
  // await ts.wait();
  // console.log(ts);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
