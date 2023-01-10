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
    membershipRegistration,
    getMembershipPlans,
    intializeTransaction,
    getTransactions,

    // state variables
    token,
    isAuthenticated,
    loading,
    user,
    error,
    message,
    membershipPlans,
    transaction,
    allTransactions,
  } = useContext(AuthContext);

  return {
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

    // state variables
    token,
    isAuthenticated,
    loading,
    user,
    error,
    message,
    membershipPlans,
    transaction,
    allTransactions,
  };
};

export default useAuth;
