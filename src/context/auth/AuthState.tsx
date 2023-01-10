import axios from "axios";
import { NextRouter } from "next/router";
import React, { useReducer } from "react";

import { LoginFormDataProps } from "@components/organisms/AuthPage/LoginForm/LoginForm";
import { RegisterFormDataProps } from "@components/organisms/AuthPage/RegisterForm/RegisterForm";

import { setAuthToken } from "@shared/libs/helpers";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
  CLEAR_MESSAGES,
  MEMBERSHIP_REGISTRATION_SUCCESS,
  MEMBERSHIP_REGISTRATION_FAIL,
  GET_MEMBERSHIP_PLANS_SUCCESS,
  GET_MEMBERSHIP_PLANS_ERROR,
  INITIALIZE_TRANSACTION_SUCCESS,
  INITIALIZE_TRANSACTION_FAILURE,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
} from "../types";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = (props: any) => {
  const initialState = {
    token: `${typeof window !== "undefined" && localStorage.token ? localStorage.getItem("token") : ""}`,
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null,
    message: null,
    membershipPlans: [],
    transaction: null,
    allTransactions: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const customAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${typeof window !== "undefined" && localStorage.token ? localStorage.getItem("token") : ""}`,
    },
  });

  // Load User
  const loadUser = async (router?: NextRouter) => {
    const fetchUser = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const res = await customAxios.get("/user/me");
        dispatch({
          type: USER_LOADED,
          payload: res.data.data,
        });
      } catch (err: any) {
        dispatch({
          type: AUTH_ERROR,
          payload: err.response.data.message,
        });
      }
    };
    setTimeout(() => {
      fetchUser();
    }, 1500);
    // if (router) {
    //   setTimeout(() => {
    //     router.push("/auth/login");
    //   }, 1500);
    // }
  };

  // Register User
  const register = async (user: RegisterFormDataProps, router: NextRouter) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await customAxios.post(`/user/register`, user, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data,
      });

      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    } catch (err: any) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  // Login User
  const login = async (user: LoginFormDataProps, router: NextRouter) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await customAxios.post("/user/login", user, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });

      await loadUser();

      if (!res.data.data.user.membershipRegistration) {
        router.push("/auth/membership-form");
      } else if (!res.data.data.user.hasSubscribed) {
        router.push("/auth/membership-form-payment");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  // Logout User
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // Clear Errors
  const clearMessages = () => dispatch({ type: CLEAR_MESSAGES });

  const setLoading = (status: boolean) => {
    dispatch({
      type: SET_LOADING,
      payload: status,
    });
  };

  // Membership Registration
  const membershipRegistration = async (user: any, router: NextRouter) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      setLoading(true);
      const res = await customAxios.put(`/user/membership-registration`, user, config);
      dispatch({
        type: MEMBERSHIP_REGISTRATION_SUCCESS,
        payload: res.data.data,
      });

      loadUser();

      setTimeout(() => {
        router.push("/auth/membership-form-payment");
      }, 1500);
    } catch (err: any) {
      dispatch({
        type: MEMBERSHIP_REGISTRATION_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  // Get Membership Plans
  const getMembershipPlans = async () => {
    setLoading(true);

    try {
      const res = await customAxios.get("/plan/active");

      const result = res.data.data.map((plan: any) => ({
        id: plan._id,
        label: plan.label,
        value: plan._id,
        name: "plan",
      }));

      dispatch({
        type: GET_MEMBERSHIP_PLANS_SUCCESS,
        payload: result,
      });
    } catch (err: any) {
      dispatch({
        type: GET_MEMBERSHIP_PLANS_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // Get Transactions
  const getTransactions = async () => {
    setLoading(true);

    try {
      const res = await customAxios.get("/transaction/me");

      const result = res.data.data.map((transaction: any) => ({
        id: transaction._id,
        transactionType: transaction.channel,
        createdAt: transaction.transaction_date,
        amount: transaction.amount,
        currency: transaction.currency,
        description: transaction.description,
        status: transaction.status,
        reference: transaction.reference,
      }));

      dispatch({
        type: GET_TRANSACTIONS_SUCCESS,
        payload: result,
      });
    } catch (err: any) {
      dispatch({
        type: GET_TRANSACTIONS_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // Initialize Transaction
  const intializeTransaction = async (details: any) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      setLoading(true);
      const res = await customAxios.post(`/payment/initialize`, details, config);
      dispatch({
        type: INITIALIZE_TRANSACTION_SUCCESS,
        payload: res.data.data,
      });
    } catch (err: any) {
      dispatch({
        type: INITIALIZE_TRANSACTION_FAILURE,
        payload: err.response.data.message,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        message: state.message,
        membershipPlans: state.membershipPlans,
        transaction: state.transaction,
        allTransactions: state.allTransactions,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
        setLoading,
        clearMessages,
        membershipRegistration,
        getMembershipPlans,
        intializeTransaction,
        getTransactions,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
