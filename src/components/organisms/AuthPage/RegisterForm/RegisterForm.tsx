import { Form, Formik, FormikProps } from "formik";
import { pick } from "lodash";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import yupPassword from "yup-password";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Logo from "@components/atoms/Logo/Logo";

import useAuth from "@hooks/useAuth";

import { ButtonProperties, errorMessages } from "@shared/libs/helpers";

import AuthBackground from "../AuthBackground/AuthBackground";

yupPassword(Yup); // extend yup

export interface RegisterFormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const RegisterForm = () => {
  const router = useRouter();
  const { register, loading } = useAuth();
  const { ref } = router.query;

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  interface Values {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    email: Yup.string().email("Invalid email").required(errorMessages.required),
    phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
    password: Yup.string()
      .required(errorMessages.required)
      .min(8, errorMessages.minChar(8))
      .minLowercase(1, errorMessages.minLowerCase(1))
      .minUppercase(1, errorMessages.minUpperCase(1))
      .minNumbers(1, errorMessages.minNumber(1))
      .minSymbols(1, errorMessages.minSymbol(1)),
    confirmPassword: Yup.string()
      .required(errorMessages.required)
      .oneOf([Yup.ref("password"), null], errorMessages.passwordMatch),
  });

  const registerUser = async (values: Values) => {
    const transformedValues = pick(values, ["firstName", "lastName", "email", "phoneNumber", "password"]);
    let finalResult;
    if (ref) {
      finalResult = { ...transformedValues, referralCode: ref };
    } else {
      finalResult = { ...transformedValues };
    }

    console.log(finalResult);
    await register(finalResult, router);
  };

  return (
    <div className="smallLaptop:flex">
      <div className="pt-24 px-8 smallLaptop:w-[40%] smallLaptop:pt-[95px] smallLaptop:pl-[59px] smallLaptop:pr-[97px]">
        <div className="hidden smallLaptop:block">
          <Logo />
        </div>
        <div>
          <h2 className="smallLaptop:pt-[172px] bigLaptop:pt-[100px] font-semibold text-[35px] pb-[23px]">Create Account</h2>
          <Formik enableReinitialize initialValues={initialState} onSubmit={registerUser} validationSchema={RegisterSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="relative">
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-xs border-black"
                    name="firstName"
                    placeholder="Enter First Name"
                    type="text"
                  />
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-xs border-black"
                    name="lastName"
                    placeholder="Enter Last Name"
                    type="text"
                  />
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-xs border-black"
                    name="email"
                    placeholder="Enter Your Email Address"
                    type="email"
                  />
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-xs border-black"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    type="tel"
                  />

                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                    container="px-6"
                    iconPosition="end"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                    name="password"
                    placeholder="Enter Password"
                    type="password"
                  />
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                    container="px-6"
                    iconPosition="end"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>
                <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
                  <CustomButton
                    customClass="mt-12 !w-[80%]"
                    handleClick={() => {}}
                    isDisabled={loading}
                    isSubmitting={loading}
                    size={ButtonProperties.SIZES.big}
                    title="Create Account"
                    type="submit"
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                  {/* <p className="font-medium">or register with</p> */}
                </div>
                <p className="text-center text-16 hover:text-obiBlack-200 cursor-pointer pt-[35px] pb-[49px]">Need Help?</p>
                <p className="text-16 text-center mb-8">
                  Already have an account?{" "}
                  <span className="text-obiRed-500 hover:text-red-800 cursor-pointer" onClick={() => router.push("/auth/login")}>
                    Login
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <AuthBackground />
    </div>
  );
};

export default RegisterForm;
