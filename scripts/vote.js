const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const governor = await ethers.getContractAt("MyGovernor", "0x5FbDB2315678afecb367f032d93F642f64180aa3", owner); // need to manually update the address

  const tx = await governor.castVote("63997564059716015854207526577796811027086785426375377214451436930533003201575", 1); // need to manually update the proposal ID

  const receipt = await tx.wait();
  const voteCastEvent = receipt.events.find(x => x.event === 'VoteCast');
  console.log(voteCastEvent);
  
  // await hre.network.provider.send("evm_mine");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
