const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
    const governor = await ethers.getContractAt("MyGovernor", "0x5FbDB2315678afecb367f032d93F642f64180aa3", owner); // need to manually update the address
    const token = await ethers.getContractAt("MyToken", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", owner); // need to manually update the address
  
    await governor.execute(
        [token.address],
        [0],
        [token.interface.encodeFunctionData("mint", [owner.address, ethers.utils.parseEther("25000")])],
        ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Give the owner more tokens!"))
    );

    const balance = await token.balanceOf(owner.address);
    console.log(`balance of ${owner.address} is now ${balance}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
