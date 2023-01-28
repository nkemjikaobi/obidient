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

const ResetPasswordForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const { token } = router.query;

  const initialState = {
    newPassword: "",
  };

  interface Values {
    newPassword: string;
  }

  const ResetPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required(errorMessages.required)
      .min(8, errorMessages.minChar(8))
      .minLowercase(1, errorMessages.minLowerCase(1))
      .minUppercase(1, errorMessages.minUpperCase(1))
      .minNumbers(1, errorMessages.minNumber(1))
      .minSymbols(1, errorMessages.minSymbol(1)),
    confirmNewPassword: Yup.string()
      .required(errorMessages.required)
      .oneOf([Yup.ref("newPassword"), null], errorMessages.passwordMatch),
  });

  const resetPassword = async (values: Values) => {
    if (!token) {
      return showToast("Unauthorized...Try clicking the link sent to your email.", NotificationTypes.ERROR);
    }

    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const transformedData = { token, newPassword: values.newPassword };

    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/reset-password`, transformedData, config);
      if (res.data.status === "success") {
        showToast("Password Reset...You will be redirected shortly", NotificationTypes.SUCCESS);
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
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
          <h2 className=" bigLaptop:pt-[230px] font-semibold text-[35px] pb-[23px]">Reset Password</h2>
          <Formik enableReinitialize initialValues={initialState} onSubmit={resetPassword} validationSchema={ResetPasswordSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="relative">
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                    container="px-6"
                    iconPosition="end"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                    name="newPassword"
                    placeholder="Enter Password"
                    type="password"
                  />
                </div>
                <div className="relative">
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                    container="px-6"
                    iconPosition="end"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                    name="confirmNewPassword"
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
                    title="Reset Password"
                    type="submit"
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                </div>
                <p className="text-16 text-center mb-8 smallLaptop:mt-24 whitespace-nowrap">
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

export default ResetPasswordForm;
