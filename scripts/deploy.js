
const { ethers } = require("hardhat");

// async function main() {
//     const [deployer, user1, user2] = await ethers.getSigners();
    
//     console.log("Deploying contracts with the account:", deployer.address);
//     console.log("Account balance:", (await deployer.getBalance()).toString());

//     // Deploy SikaToken
//     const SikaToken = await ethers.getContractFactory("SikaToken");
//     const sikaToken = await SikaToken.deploy();
//     await sikaToken.deployed();
    
//     console.log("SikaToken deployed to:", sikaToken.address);

//     // Deploy NFT Marketplace
//     const NFTMarketplace = await ethers.getContractFactory("TokenBasedNFTMarketplace");
//     const marketplace = await NFTMarketplace.deploy(sikaToken.address);
//     await marketplace.deployed();
    
//     console.log("NFTMarketplace deployed to:", marketplace.address);

//     // Mint tokens to test users
//     const tokenAmount = ethers.utils.parseEther("1000"); // 1000 tokens each
//     await sikaToken.mint(user1.address, tokenAmount);
//     await sikaToken.mint(user2.address, tokenAmount);
    
//     console.log(`Gave ${ethers.utils.formatEther(tokenAmount)} tokens to user1:`, user1.address);
//     console.log(`Gave ${ethers.utils.formatEther(tokenAmount)} tokens to user2:`, user2.address);

//     return {
//         marketplace: marketplace.address,
//         sikaToken: sikaToken.address,
//         deployer: deployer.address,
//         user1: user1.address,
//         user2: user2.address
//     };
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });

    
async function main() {
  const UserProfileRegistry = await hre.ethers.getContractFactory("UserProfileRegistry");
  const registry = await UserProfileRegistry.deploy();

  await registry.deployed(); // ethers v5 way

  console.log("UserProfileRegistry deployed to:", registry.address); // ethers v5 way
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});