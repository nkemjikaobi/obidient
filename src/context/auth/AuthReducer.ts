import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  LOGOUT,
  SET_LOADING,
  MEMBERSHIP_REGISTRATION_SUCCESS,
  MEMBERSHIP_REGISTRATION_FAIL,
  GET_MEMBERSHIP_PLANS_SUCCESS,
  GET_MEMBERSHIP_PLANS_ERROR,
  INITIALIZE_TRANSACTION_SUCCESS,
  INITIALIZE_TRANSACTION_FAILURE,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
} from "../types";

const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case AUTH_ERROR:
      // localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        loading: false,
        message: "Registration Success. You will be redirected shortly",
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case MEMBERSHIP_REGISTRATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        message: "Registration Success. You will be redirected shortly",
      };
    case MEMBERSHIP_REGISTRATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        token: action.payload.token,
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_MEMBERSHIP_PLANS_SUCCESS:
      return {
        ...state,
        membershipPlans: action.payload,
        loading: false,
      };
    case GET_MEMBERSHIP_PLANS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        allTransactions: action.payload,
        loading: false,
      };
    case GET_TRANSACTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case INITIALIZE_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction: action.payload,
        loading: false,
      };
    case INITIALIZE_TRANSACTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
