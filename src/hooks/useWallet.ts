import { useContext } from "react";

import WalletContext from "../context/wallet/WalletContext";

const useWallet = () => {
  const {
    // methods
    connectWallet,
    disconnectWallet,
    monitorAccountChanged,
    monitorDisconnect,
    loadContract,
    getTokenDetails,

    // state variables
    address,
    isConnected,
    balance,
    web3,
    provider,
    symbol,
    providerOptions,
    web3Modal,
    nftContract,
    tokenUri,
  } = useContext(WalletContext);

  return {
    // methods
    connectWallet,
    disconnectWallet,
    monitorAccountChanged,
    monitorDisconnect,
    loadContract,
    getTokenDetails,

    // state variables
    address,
    isConnected,
    balance,
    web3,
    provider,
    symbol,
    providerOptions,
    web3Modal,
    nftContract,
    tokenUri,
  };
};

export default useWallet;
