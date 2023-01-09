import axios from "axios";
import { NextRouter } from "next/router";
import React, { useReducer } from "react";

import { LoginFormDataProps } from "@components/organisms/AuthPage/LoginForm/LoginForm";
import { RegisterFormDataProps } from "@components/organisms/AuthPage/RegisterForm/RegisterForm";

import { setAuthToken } from "@shared/libs/helpers";

import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS, SET_LOADING, CLEAR_MESSAGES } from "../types";
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
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await customAxios.get("/user/me");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err: any) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.message,
      });
    }
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

      loadUser();

      if (!res.data.data.hasSubscribed) {
        router.push("/auth/membership-form");
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

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        message: state.message,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
        setLoading,
        clearMessages,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
