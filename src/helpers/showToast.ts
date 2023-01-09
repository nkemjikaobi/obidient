import toast from "react-hot-toast";

const showToast = (message: string, type: string) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
  }
};

export default showToast;
