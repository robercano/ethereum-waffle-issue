import { expect } from "chai";
import { ethers } from "hardhat";

import { SimpleContract } from "../typechain";

describe("SimpleContract", function () {
    describe("Basic Cases", function () {
        let simpleContract: SimpleContract;

        // Initialize the contract
        beforeEach(async function () {
            const SimpleContract = await ethers.getContractFactory("SimpleContract");
            simpleContract = (await SimpleContract.deploy()) as SimpleContract;
            await simpleContract.deployed();
        });
        it("Always fails", async function () {
            await expect(simpleContract.fail()).to.be.revertedWith("This function always fails");
        });
    });
});
