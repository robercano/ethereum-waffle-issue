//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract SimpleContract {
    function fail() external pure {
        require(false, "This function always fails");
    }
}
