// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const StorageModule = buildModule("StorageModule", (m) => {
  

  const StorageNFT = m.contract("AsoEbiNFT");

  return { StorageNFT };
});

export default StorageModule;
