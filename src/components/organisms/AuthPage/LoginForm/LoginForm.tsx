import { Form, Formik, FormikProps } from "formik";
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

export interface LoginFormDataProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const { login, loading } = useAuth();

  const initialState = {
    email: "",
    password: "",
  };

  interface Values {
    email: string;
    password: string;
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(errorMessages.required),
    password: Yup.string()
      .required(errorMessages.required)
      .min(8, errorMessages.minChar(8))
      .minLowercase(1, errorMessages.minLowerCase(1))
      .minUppercase(1, errorMessages.minUpperCase(1))
      .minNumbers(1, errorMessages.minNumber(1))
      .minSymbols(1, errorMessages.minSymbol(1)),
  });

  const loginUser = async (values: Values) => {
    const transformedValues = { phoneOrEmail: values.email, password: values.password };
    await login(transformedValues, router);
  };

  return (
    <div className="smallLaptop:flex">
      <div className="pt-24 px-8 smallLaptop:w-[40%] smallLaptop:pt-[95px] smallLaptop:pl-[59px] smallLaptop:pr-[97px]">
        <div className="hidden smallLaptop:block">
          <Logo />
        </div>
        <div>
          <h2 className=" bigLaptop:pt-[230px] font-semibold text-[35px] pb-[23px]">Login</h2>
          <Formik enableReinitialize initialValues={initialState} onSubmit={loginUser} validationSchema={LoginSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="relative">
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-xs border-black"
                    name="email"
                    placeholder="Enter Your Email Address"
                    type="email"
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
                </div>
                <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
                  <CustomButton
                    customClass="mt-12 !w-[80%]"
                    handleClick={() => {}}
                    isDisabled={loading}
                    isSubmitting={loading}
                    size={ButtonProperties.SIZES.big}
                    title="Login"
                    type="submit"
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                  {/* <p className="font-medium">or register with</p> */}
                </div>
                <p className="text-center text-16 hover:text-red-500 cursor-pointer pt-[35px] pb-[49px] whitespace-nowrap" onClick={() => router.push("/auth/forgot-password")}>
                  Forgot Password?
                </p>
                <p className="text-16 text-center mb-8 smallLaptop:mt-24 whitespace-nowrap">
                  Dont have an account?{" "}
                  <span className="text-obiRed-500 hover:text-red-800 cursor-pointer" onClick={() => router.push("/auth/create-account")}>
                    Register
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

export default LoginForm;
