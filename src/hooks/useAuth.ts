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

    // state variables
    token,
    isAuthenticated,
    loading,
    user,
    error,
    message,
    membershipPlans,
    transaction,
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

    // state variables
    token,
    isAuthenticated,
    loading,
    user,
    error,
    message,
    membershipPlans,
    transaction,
  };
};

export default useAuth;
