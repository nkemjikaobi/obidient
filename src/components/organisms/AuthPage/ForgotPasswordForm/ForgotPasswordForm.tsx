import axios from "axios";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { showToast } from "src/helpers/showToast";
import * as Yup from "yup";
import yupPassword from "yup-password";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Logo from "@components/atoms/Logo/Logo";

import { ButtonProperties, NotificationTypes, errorMessages } from "@shared/libs/helpers";

import AuthBackground from "../AuthBackground/AuthBackground";

yupPassword(Yup); // extend yup

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const initialState = {
    email: "",
  };

  interface Values {
    email: string;
  }

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(errorMessages.required),
  });

  const forgotPassword = async (values: Values) => {
    if (!values.email && !email) {
      return showToast("Please enter email", NotificationTypes.ERROR);
    }

    setLoading(true);
    setEmail(values.email);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/forgot-password`, { email: values.email }, config);
      if (res.data.status === "success") {
        showToast("Reset Link Sent", NotificationTypes.SUCCESS);
      }
    } catch (error: any) {
      showToast(error.response.data.message, NotificationTypes.ERROR);
    }
    setLoading(false);
  };

  return (
    <div className="smallLaptop:flex">
      <div className="pt-24 px-8 smallLaptop:w-[40%] smallLaptop:pt-[95px] smallLaptop:pl-[59px] smallLaptop:pr-[97px]">
        <div className="hidden smallLaptop:block">
          <Logo />
        </div>
        <div>
          <h2 className=" bigLaptop:pt-[230px] font-semibold text-[35px] pb-[23px]">Forgot Password</h2>
          <Formik enableReinitialize initialValues={initialState} onSubmit={forgotPassword} validationSchema={ForgotPasswordSchema}>
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
                </div>
                <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
                  <CustomButton
                    customClass="mt-12 !w-[80%]"
                    handleClick={() => {}}
                    isDisabled={loading}
                    isSubmitting={loading}
                    size={ButtonProperties.SIZES.big}
                    title="Get Reset Link"
                    type="submit"
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                </div>
                <p className="text-center text-16 hover:text-red-800 cursor-pointer pt-[35px] pb-[49px] whitespace-nowrap" onClick={() => forgotPassword({ email })}>
                  Resend Link
                </p>
                <p className="text-16 text-center mb-8 smallLaptop:mt-24 whitespace-nowrap">
                  <span className="text-obiRed-500 hover:text-red-800 cursor-pointer" onClick={() => router.push("/auth/login")}>
                    Back to Login
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

export default ForgotPasswordForm;
