import { ChangeEventHandler } from "react";
import { v4 as uuidv4 } from "uuid";

import CustomLabel from "../CustomLabel/CustomLabel";
import CustomSelectOption from "./CustomSelectOption";

export interface OptionType {
  text: string;
  value: string;
}

export interface CustomSelectProps {
  label?: string;
  value?: any;
  options?: Array<any>;
  placeholder: string;
  defaultValue?: any;
  className?: string;
  parentContainer?: string;
  container?: string;
  componentHandler?: Function;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const CustomSelect = ({ label, parentContainer, container, className, value, options, placeholder, defaultValue, componentHandler, onChange, ...props }: CustomSelectProps) => {
  let hasOptions = false;
  let selectOptions: any = [];
  if (placeholder) {
    hasOptions = true;
    selectOptions = [<CustomSelectOption disabled={true} key={uuidv4()} text={placeholder} value={""} />];
  }
  if (options && options.length > 0) {
    hasOptions = true;
    selectOptions = [...selectOptions, ...options.map((option: OptionType, index: number) => <CustomSelectOption key={index + 1} text={option.text} value={option.value} />)];
  }

  return (
    <div className={`w-full h-full rounded-[0.313rem] border-[0.35px] border-citiGray-250 ${parentContainer}`}>
      {label && <CustomLabel title={label} />}
      <div className={`h-full ${container}`}>
        {componentHandler ? (
          <select
            className={`text-black border-none focus:ring-0 px-4 w-full h-full focus:outline-none ${className}`}
            defaultValue={defaultValue}
            onChange={(e) => componentHandler(e.target.value)}
            value={value}
            {...props}
          >
            {hasOptions && selectOptions}
          </select>
        ) : (
          <select
            className={`text-black border-none focus:ring-0 px-4 w-full h-full focus:outline-none ${className}`}
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
            {...props}
          >
            {hasOptions && selectOptions}
          </select>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;

CustomSelect.defaultProps = {
  label: "",
  value: "",
  options: [],
  defaultValue: "",
  className: "",
  parentContainer: "",
  container: "",
  componentHandler: () => {},
};
