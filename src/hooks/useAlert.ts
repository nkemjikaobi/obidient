import { useContext } from "react";

import AlertContext from "../context/alert/AlertContext";

const useAlert = () => {
  const {
    // methods
    setAlert,

    // state variables
    alerts,
  } = useContext(AlertContext);

  return {
    // methods
    setAlert,

    // state variables
    alerts,
  };
};

export default useAlert;
