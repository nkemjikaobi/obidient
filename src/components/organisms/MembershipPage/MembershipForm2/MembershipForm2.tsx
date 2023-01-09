import { Form, Formik, FormikProps } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomRadioButton from "@components/atoms/CustomRadioButton/CustomRadioButton";
import FormikCustomCheckbox from "@components/atoms/FormikCustomCheckBox/FormikCustomCheckbox";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";

import { ButtonProperties, CURRENCIES } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";

const MembershipForm2 = () => {
  const router = useRouter();
  const membershipData = [
    {
      id: 1,
      label: "Monthly membership plan (NGN 1,000/MONTH)",
      value: "1",
      name: "plan",
    },
    {
      id: 2,
      label: "Annual membership plan (NGN 12,000/MONTH)",
      value: "1",
      name: "plan",
    },
  ];

  const initialState = {
    comment: "",
    terms: false,
  };

  interface Values {
    comment: string;
    terms: boolean;
  }

  const RegisterSchema = Yup.object().shape({
    terms: Yup.boolean().oneOf([true], "Agree to terms and conditions"),
  });

  const registerMember = () => {};

  return (
    <div className="px-8 bigLaptop:px-[100px] television:px-[164px] pt-8">
      <div className="hidden smallLaptop:flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <Icon name="caretLeft" />
          <p className="font-semibold ml-2 whitespace-nowrap" onClick={() => router.push("/auth/membership-form")}>
            Go Back
          </p>{" "}
        </div>
        <h3 className="text-[27px] bigLaptop:text-[40px] font-semibold">Membership Registration Form</h3>
        <span className="text-14">
          Have an account?{" "}
          <span className="text-obiBlue-200 ml-2" onClick={() => router.push("/auth/login")}>
            Sign In
          </span>
        </span>
      </div>
      <p className="hidden smallLaptop:block text-14 text-[#828282] pt-[52px]">Kindly fill in your details to continue</p>
      <div>
        <div>
          <div className="relative">
            <h3 className="font-semibold text-18 mt-12">4. Membership Plan</h3>
            <p className="text-14 text-obiGray-320 my-4">Select preferred membership Plan.</p>
            <CustomRadioButton
              labelClassName="font-light text-12 ml-2 whitespace-nowrap"
              options={membershipData}
              parentClassName="space-y-4 flex-col !items-start mt-[1.313rem] mb-6"
            />
          </div>
          <div>
            <h3 className="font-semibold text-18 mb-4 mt-12">5. Confirm Membership</h3>
            <p className="text-14 text-obiGray-320 my-4">
              by signing up you agree to our <span className="text-obiBlue-200">terms and conditions</span> and <span className="text-obiBlue-200">privacy policy</span>
            </p>
            <div className="flex items-center">
              <Image alt="" height={98} src="/images/png/confirmDp.png" width={78} />
              <div className="ml-8 text-14 smallLaptop:text-16">
                <p>Name: Alhaji Akassan Muyidden</p>
                <p>Ward: Gwagalada</p>
                <p>LGA: Ikeja</p>
                <p>State: Lagos</p>
              </div>
            </div>
            <div className="flex items-center justify-between my-4 w-[30%]">
              <p>SubTotal</p>
              <p className="whitespace-nowrap ml-8 smallLaptop:ml-0">{CURRENCIES.NAIRA} 1,000</p>
            </div>
            <div className="flex items-center justify-between my-4 w-[30%]">
              <p>Discount</p>
              <p className="whitespace-nowrap ml-8 smallLaptop:ml-0">{CURRENCIES.NAIRA} 0.00</p>
            </div>
            <hr className="w-[30%] mb-4" />
            <div className="flex items-center justify-between my-4 w-[30%]">
              <p>Total</p>
              <p className="whitespace-nowrap ml-8 smallLaptop:ml-0">{CURRENCIES.NAIRA} 1,000.00</p>
            </div>
            <hr className="w-[30%] mb-4" />
            <Formik enableReinitialize initialValues={initialState} onSubmit={registerMember} validationSchema={RegisterSchema}>
              {(props: FormikProps<Values>) => (
                <Form className="">
                  <div className="relative w-[30%]">
                    <div>
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320 whitespace-nowrap" title="Comment (optional)" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 !w-[350px] smallLaptop:!w-full"
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="comment"
                        placeholder="Enter an additional comment"
                        type="text"
                      />
                    </div>
                    <FormikCustomCheckbox
                      className="!border-gray-400 w-5 h-5  rounded-lg"
                      label="Please check to acknowledge Privacy/terms policy"
                      labelClassName="text-12 smallLaptop:text-14 font-normal whitespace-nowrap"
                      labelPosition="end"
                      name="terms"
                      type="checkbox"
                    />
                    <CustomButton
                      customClass="mt-12 !w-full smallLaptop:!w-[80%] mb-8 smallLaptop:mb-0"
                      handleClick={() => {}}
                      size={ButtonProperties.SIZES.big}
                      title={`Pay ${CURRENCIES.NAIRA} 1,000`}
                      type="submit"
                      variant={ButtonProperties.VARIANT.secondary.name}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm2;
