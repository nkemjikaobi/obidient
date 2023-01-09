import { useContext } from "react";

import AuthContext from "@context/auth/AuthContext";

const useAuth = () => {
  const {
    // methods
    register,
    clearErrors,
    loadUser,
    login,
    logout,
    setLoading,
    clearMessages,

    // state variables
    token,
    isAuthenticated,
    loading,
    user,
    error,
    message,
  } = useContext(AuthContext);

  return {
    register,
    clearErrors,
    loadUser,
    login,
    logout,
    setLoading,
    clearMessages,

    // state variables
    token,
    isAuthenticated,
    loading,
    user,
    error,
    message,
  };
};

export default useAuth;
