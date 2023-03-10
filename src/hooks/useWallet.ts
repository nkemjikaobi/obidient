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
    nftMetaData,
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
    nftMetaData,
  };
};

export default useWallet;
