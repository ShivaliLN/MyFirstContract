//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract FirstContract {
  uint public x;

constructor(uint _x){
x = _x;
} 

  function increment() external returns (uint) {
    return x++;
  }
  
}
