import WalletConnectProvider from "@walletconnect/web3-provider";
import React, { useReducer } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";

import NFTJson from "@artifacts/NFT.json";

import useAlert from "@hooks/useAlert";

import { NotificationTypes, convertToEther } from "@shared/libs/helpers";

import { CONNECT_WALLET, DISCONNECT_WALLET, GET_TOKEN_DETAILS, LOAD_CONTRACT, MONITOR_ACCOUNT_CHANGED, MONITOR_DISCONNECT } from "../types";
import WalletContext from "./WalletContext";
import WalletReducer from "./WalletReducer";

const WalletState = (props: any) => {
  const initialState = {
    address: null,
    isConnected: false,
    balance: "",
    web3: null,
    provider: null,
    symbol: "",
    providerOptions: null,
    web3Modal: null,
    nftContract: null,
    tokenUri: "",
    nftMetaData: null,
  };

  const [state, dispatch] = useReducer(WalletReducer, initialState);

  const { setAlert } = useAlert();

  // Connect Wallet on Ethereum Network
  const connectWallet = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: process.env.NEXT_PUBLIC_INFURA_APP_ID,
        },
      },
    };
    const web3Modal = new Web3Modal({
      theme: "dark",
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      // disableInjectedProvider: false
    });
    try {
      const provider = await web3Modal.connect();

      const web3 = new Web3(provider);

      //  Get Accounts
      const accounts = await web3.eth.getAccounts();

      if (accounts.length > 0) {
        // Get Balance
        let balance;
        await web3.eth.getBalance(`${accounts[0]}`, function (err: any, result: any) {
          if (err) {
            setAlert(err.message, NotificationTypes.ERROR);
          } else {
            balance = convertToEther(web3, result);
          }
        });

        dispatch({
          type: CONNECT_WALLET,
          payload: {
            balance,
            accounts,
            web3,
            web3Modal,
            providerOptions,
            provider,
          },
        });
        localStorage.setItem("isWalletConnected", "true");
        localStorage.setItem("count", "1");

        const count = localStorage.getItem("count");

        count !== "1" ? setAlert("Wallet Connected", NotificationTypes.SUCCESS) : null;

        return true;
      }
    } catch (error) {
      setAlert((error as Error).message, NotificationTypes.ERROR);
      return false;
    }
  };

  const getTokenDetails = async (contract: any, address: any) => {
    try {
      const tokenId = await contract.methods.tokenOwned(address).call();
      if (tokenId.toString() !== "0") {
        const res = await contract.methods.tokenURI(tokenId).call();

        const metaData = await fetch(`${process.env.NEXT_PUBLIC_IPFS_BASE_URL}/${res}`).then((data) => data.json());

        dispatch({
          type: GET_TOKEN_DETAILS,
          payload: { res, metaData },
        });
      }
    } catch (error) {
      setAlert((error as Error).message, NotificationTypes.ERROR);
    }
  };

  // Load Contract
  const loadContract = async (web3: any) => {
    try {
      const nftContract = new web3.eth.Contract(NFTJson, `${process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS}`);

      dispatch({
        type: LOAD_CONTRACT,
        payload: {
          nftContract,
        },
      });

      return nftContract;
    } catch (error) {
      setAlert((error as Error).message, NotificationTypes.ERROR);
    }
  };

  // Disconnect wallet
  const disconnectWallet = async (modal: any, router: any) => {
    modal.clearCachedProvider();
    dispatch({
      type: DISCONNECT_WALLET,
    });
    localStorage.removeItem("isWalletConnected");
    localStorage.removeItem("count");
  };

  // Monitor disconnect
  const monitorDisconnect = async (provider: any) => {
    // Subscribe to session disconnection
    provider.on("disconnect", (code: number, reason: string) => {
      dispatch({
        type: MONITOR_DISCONNECT,
      });
      localStorage.removeItem("isWalletConnected");
      localStorage.removeItem("count");
      setAlert(reason, NotificationTypes.ERROR);
    });
  };

  // Monitor account changed
  const monitorAccountChanged = async (provider: any) => {
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: string[]) => {
      dispatch({
        type: MONITOR_ACCOUNT_CHANGED,
      });
      localStorage.removeItem("isWalletConnected");
      localStorage.removeItem("count");
    });
  };

  return (
    <WalletContext.Provider
      value={{
        address: state.address,
        isConnected: state.isConnected,
        balance: state.balance,
        web3: state.web3,
        provider: state.provider,
        symbol: state.symbol,
        providerOptions: state.providerOptions,
        web3Modal: state.web3Modal,
        nftContract: state.nftContract,
        tokenUri: state.tokenUri,
        nftMetaData: state.nftMetaData,
        connectWallet,
        disconnectWallet,
        monitorAccountChanged,
        monitorDisconnect,
        loadContract,
        getTokenDetails,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletState;
