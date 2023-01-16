import { CONNECT_WALLET, DISCONNECT_WALLET, GET_TOKEN_DETAILS, LOAD_CONTRACT, MONITOR_ACCOUNT_CHANGED, MONITOR_DISCONNECT } from "../types";

const WalletReducer = (state: any, action: any) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return {
        ...state,
        address: action.payload.accounts[0],
        isConnected: true,
        balance: action.payload.balance,
        web3: action.payload.web3,
        web3Modal: action.payload.web3Modal,
        providerOptions: action.payload.providerOptions,
        provider: action.payload.provider,
      };
    case LOAD_CONTRACT:
      return {
        ...state,
        nftContract: action.payload.nftContract,
      };
    case DISCONNECT_WALLET:
      return {
        ...state,
        address: null,
        isConnected: false,
        balance: "",
        web3: null,
        web3Modal: null,
        providerOptions: null,
        provider: null,
      };
    case MONITOR_DISCONNECT:
      return {
        ...state,
        isConnected: false,
        balance: "",
        address: null,
      };
    case MONITOR_ACCOUNT_CHANGED:
      return {
        ...state,
        address: null,
        isConnected: false,
        balance: "",
      };
    case GET_TOKEN_DETAILS:
      return {
        ...state,
        tokenUri: action.payload,
      };
    default:
      return state;
  }
};
export default WalletReducer;
