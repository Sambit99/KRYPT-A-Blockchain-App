const main = async () => {
  const TransactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const Transactions = await TransactionsFactory.deploy();
  await Transactions.deployed();

  console.log(`Transactions Contract Deployed to : ${Transactions.address}`);
};

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
