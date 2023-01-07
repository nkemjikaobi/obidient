/**
 * Button properties for the custom button
 */
export const ButtonProperties = {
  SIZES: {
    small: "small",
    medium: "medium",
    big: "big",
  },
  ICON_POSITION: {
    start: "start",
    end: "end",
  },
  VARIANT: {
    primary: {
      name: "primary",
      background: "obiRed-500",
      hover: "red-800",
      disabled: "red-200",
      focused: "obiRed-500",
    },
    secondary: {
      name: "secondary",
      background: "black",
      hover: "gray-800",
      disabled: "gray-200",
      focused: "black",
    },
  },
};

/**
 * Separate classes with space between
 * This is used to separate a list of classes that are separated by commas to a list
 * classes that are separated by space
 * @param {string[]} classes
 * @return {string} classNames
 */
export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const errorMessages = {
  email: "Email is not valid",
  maxChar: (num: number) => `This field cannot have more than ${num} characters`,
  minChar: (num: number) => `This field must be at least ${num} characters`,
  minLowerCase: (num: number) => `This field must be at least ${num} lower case character`,
  minUpperCase: (num: number) => `This field must be at least ${num} upper case character`,
  minNumber: (num: number) => `This field must be at least ${num} number`,
  minSymbol: (num: number) => `This field must be at least ${num} special character`,
  required: "This field is compulsory",
  passwordMatch: "Passwords dont match",
};

// CURRENCIES
export const CURRENCIES = {
  NAIRA: "₦",
};

export const TransactionStatus = {
  SUCCESSFUL: "successful",
};
