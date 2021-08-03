const { assert } = require("chai");

describe("FirstContract", function () {
  let firstContract;
  before(async () => {
    const FirstContract = await ethers.getContractFactory("FirstContract");
    firstContract = await FirstContract.deploy(0);
    await firstContract.deployed();
});

describe('after one increment call', () => {
  before(async () => {
      await firstContract.increment();
  });

  it('should increase the value to 1', async () => {
      const x = await firstContract.x();
      assert.equal(x.toNumber(), 1);
  });
});
});
