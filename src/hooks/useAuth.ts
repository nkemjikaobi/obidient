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
    getAllRefs,

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
    allRefs,
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
    getAllRefs,

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
    allRefs,
  };
};

export default useAuth;
