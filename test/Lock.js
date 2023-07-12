import { ethers } from "hardhat";

describe("MyContract", function () {
  let myContract;
  let owner;
  let recipient;

  beforeEach(async () => {
    [owner, recipient] = await ethers.getSigners();

    const MyContract = await ethers.getContractFactory("MyContract");
    myContract = await MyContract.deploy();
    await myContract.deployed();
  });

  it("should have the correct owner", async function () {
    expect(await myContract.owner()).to.equal(owner.address);
  });

  it("should switch to Polygon", async function () {
    expect(await myContract.switchToPolygon()).to.not.throw;
    // Add additional assertions or checks as needed
  });

  it("should withdraw 10 ETH", async function () {
    const initialBalance = await ethers.provider.getBalance(owner.address);
    expect(await myContract.withdraw()).to.not.throw;
    const newBalance = await ethers.provider.getBalance(owner.address);
    expect(newBalance.sub(initialBalance)).to.equal(ethers.utils.parseEther("10"));
  });

  it("should send a transaction", async function () {
    const amount = ethers.utils.parseEther("1");
    const initialBalance = await ethers.provider.getBalance(recipient.address);
    expect(await myContract.sendTransaction(recipient.address, amount)).to.not.throw;
    const newBalance = await ethers.provider.getBalance(recipient.address);
    expect(newBalance.sub(initialBalance)).to.equal(amount);
  });
});
