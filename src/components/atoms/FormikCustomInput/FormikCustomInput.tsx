import { useField } from "formik";
import React, { useState } from "react";

import Icon from "@components/atoms/Icons";

import { classNames } from "@shared/libs/helpers";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

const FormikCustomInput = ({ className, container, type, iconClass, iconPosition, disabled, icon, inputClassName, ...props }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [field, meta] = useField<{}>(props);

  return (
    <div className="mb-[1.875rem]">
      <div
        className={classNames(
          "flex items-center h-[3.571rem] w-full",
          className,
          meta.touched && meta.error ? "!border-red-500" : meta.touched && !meta.error ? "!border-green-700" : "border-[#B2BCCA]"
        )}
      >
        <div className={classNames("flex px-5 bg-white text-black items-center justify-start h-full w-full rounded-[0.313rem]", container)}>
          {icon && iconPosition === "start" && <Icon className={iconClass} name={icon} />}
          <input
            className={`${inputClassName} focus:outline-none border-none focus:ring-0 autofill:shadow-reset-bg autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full`}
            disabled={disabled}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            {...field}
            {...props}
          />

          {icon && iconPosition === "end" && <Icon className={iconClass} name={icon} />}
          {type === "password" && showPassword ? (
            <Icon className="cursor-pointer" name="eye" onClick={handleShowPassword} />
          ) : (
            type === "password" && !showPassword && <Icon className="cursor-pointer" name="lashes" onClick={handleShowPassword} />
          )}
        </div>
      </div>
      {meta.touched && meta.error && <ErrorMessage error={meta.error} />}
    </div>
  );
};

export default FormikCustomInput;

FormikCustomInput.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  inputClassName: "",
  iconClass: "",
  container: "",
};
