import { useContext } from "react";

import WalletContext from "../context/wallet/WalletContext";

const useWallet = () => {
  const {
    // methods
    connectWallet,
    disconnectWallet,
    monitorAccountChanged,
    monitorDisconnect,

    // state variables
    address,
    isConnected,
    balance,
    web3,
    provider,
    symbol,
    providerOptions,
    web3Modal,
  } = useContext(WalletContext);

  return {
    // methods
    connectWallet,
    disconnectWallet,
    monitorAccountChanged,
    monitorDisconnect,

    // state variables
    address,
    isConnected,
    balance,
    web3,
    provider,
    symbol,
    providerOptions,
    web3Modal,
  };
};

export default useWallet;
