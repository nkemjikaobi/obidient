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
    getAllUsers,

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
    allUsers,
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
    getAllUsers,

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
    allUsers,
  };
};

export default useAuth;
