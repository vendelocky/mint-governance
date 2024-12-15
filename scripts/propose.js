const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const governor = await ethers.getContractAt("MyGovernor", "0x5FbDB2315678afecb367f032d93F642f64180aa3", owner); // need to manually update the address
  const token = await ethers.getContractAt("MyToken", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", owner); // need to manually update the address

  const tx = await governor.propose(
    [token.address],
    [0],
    [token.interface.encodeFunctionData("mint", [owner.address, ethers.utils.parseEther("25000")])],
    "Give the owner more tokens!"
  );
  
  const receipt = await tx.wait();
  const event = receipt.events.find(x => x.event === 'ProposalCreated');
  const { proposalId } = event.args;
  console.log('proposal ID: ', proposalId);

  // Mine a block immediately and wait for the 1 block voting period
  // await hre.network.provider.send("evm_mine");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
