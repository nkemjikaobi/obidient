// import toast from "react-hot-toast";

// const showToast = (message: string, type: string) => {
//   switch (type) {
//     case "success":
//       toast.success(message);
//       break;
//     case "error":
//       toast.error(message);
//       break;
//   }
// };

// export default showToast;

import { toast } from "react-hot-toast";

import Icon from "@components/atoms/Icons";

import { NotificationTypes } from "@shared/libs/helpers";

export const showToast = (message: string, type: string) => {
  const appearance =
    type === NotificationTypes.SUCCESS ? "bg-green-500 border-blue-400" : type === NotificationTypes.ERROR ? "bg-red-100 border-red-200" : "bg-blue-300 border-blue-400";

  const iconName = type === NotificationTypes.SUCCESS ? "goodHand" : type === NotificationTypes.ERROR ? "sadFace" : "goodHand";

  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } p-4 max-w-md w-full ${appearance} rounded-[0.625rem] pointer-events-auto flex justify-center items-center border w-[38rem] h-[4.625rem]`}
    >
      <Icon name={iconName} />
      <p className="text-14 font-semibold ml-4">{message}</p>
    </div>
  ));
};
