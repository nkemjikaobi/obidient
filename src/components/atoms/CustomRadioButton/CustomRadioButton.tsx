import React from "react";

import { RadioButtonProperties } from "@shared/libs/helpers";

import CustomLabel from "../CustomLabel/CustomLabel";

interface CustomRadioButtonProps {
  labelPosition?: string;
  className?: string;
  parentClassName?: string;
  labelClassName?: string;
  options: Array<any>;
  size?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface RadioProp {
  name: string;
  value: string;
  label: string;
  isDisabled: boolean;
  isChecked: boolean;
  numberOfStars?: number;
  isRating?: boolean;
}

const CustomRadioButton = ({ options, size, onChange, parentClassName, labelPosition, className, labelClassName }: CustomRadioButtonProps) => {
  return (
    <div className="block">
      <div className={`flex items-center ${parentClassName}`}>
        {options &&
          options.map((option: RadioProp, index: number) => (
            <div className={`flex items-center ${className}`} key={index}>
              {option.label && labelPosition === RadioButtonProperties.LABEL_POSITION.start && (
                <CustomLabel className={`inline-flex items-center text-14 ${labelClassName}`} title={option.label} />
              )}
              <input
                checked={option.isChecked}
                className={` ${size === RadioButtonProperties.SIZES.small ? "w-4 h-4" : "w-5 h-5"} mx-2 cursor-pointer
                   bg-white border drop-shadow-sm
                   focus:ring-0`}
                name={option.name}
                onChange={onChange}
                type="radio"
                value={option.value}
              />
              {option.label && labelPosition === RadioButtonProperties.LABEL_POSITION.end && (
                <CustomLabel className={`inline-flex items-center text-14 ${labelClassName}`} title={option.label} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomRadioButton;

CustomRadioButton.defaultProps = {
  labelPosition: RadioButtonProperties.LABEL_POSITION.end,
  className: "",
  labelClassName: "",
  parentClassName: "",
  size: RadioButtonProperties.SIZES.small,
  onChange: () => {},
};
