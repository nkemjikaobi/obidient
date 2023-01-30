import { Form, Formik, FormikProps } from "formik";
import { pick } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { showToast } from "src/helpers/showToast";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomRadioButton from "@components/atoms/CustomRadioButton/CustomRadioButton";
import FormikCustomCheckbox from "@components/atoms/FormikCustomCheckBox/FormikCustomCheckbox";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";

import useAuth from "@hooks/useAuth";
import useWallet from "@hooks/useWallet";

import { ButtonProperties, NotificationTypes } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";

const MembershipForm2 = () => {
  const router = useRouter();
  const { user, getMembershipPlans, membershipPlans, loading, intializeTransaction, transaction } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState("");
  const { address } = useWallet();

  useEffect(() => {
    getMembershipPlans();
  }, []);

  const initialState = {
    referredBy: "",
    terms: false,
  };

  interface Values {
    referredBy: string;
    terms: boolean;
  }

  const RegisterSchema = Yup.object().shape({
    terms: Yup.boolean().oneOf([true], "Agree to terms and conditions"),
    referredBy: Yup.string().email("Invalid email"),
  });

  const registerMember = async (values: Values) => {
    if (selectedPlan === "") {
      return showToast("Select a plan", NotificationTypes.ERROR);
    }

    if (!address) {
      return showToast("Connect Wallet", NotificationTypes.ERROR);
    }

    const transformedValues = pick(values, ["referredBy"]);
    const finalPayload = {
      ...transformedValues,
      plan: selectedPlan,
      user_id: user?._id,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      wallet_address: address,
      profileImageUrl: user?.profileImageUrl,
    };
    await intializeTransaction(finalPayload);
  };

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
        <span className="text-14">Choose plan</span>
      </div>
      <p className="hidden smallLaptop:block text-14 text-[#828282] pt-[52px]">Kindly fill in your details to continue</p>
      <div>
        <div>
          <div className="relative">
            <h3 className="font-semibold text-18 mt-12">4. Membership Plan</h3>
            <p className="text-14 text-obiGray-320 my-4">Select preferred membership Plan.</p>
            {loading ? (
              <div className="flex items-center">
                <ImSpinner9 className="animate-spin" /> <span className="text-14 ml-2">Fetching Plans...</span>
              </div>
            ) : (
              <CustomRadioButton
                labelClassName="font-light text-12 ml-2 whitespace-nowrap"
                onChange={(e) => setSelectedPlan(e.target.value)}
                options={membershipPlans}
                parentClassName="space-y-4 flex-col !items-start mt-[1.313rem] mb-6"
              />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-18 mb-4 mt-12">5. Confirm Membership</h3>
            <p className="text-14 text-obiGray-320 my-4">
              by signing up you agree to our <span className="text-obiBlue-200">terms and conditions</span> and <span className="text-obiBlue-200">privacy policy</span>
            </p>
            <div className="flex items-center">
              <Image alt="" height={98} src={user?.profileImageUrl || "/images/png/confirmDp2.png"} width={78} />
              <div className="ml-8 text-14 smallLaptop:text-16">
                <p>
                  Name: {user?.firstName} {user?.lastName}
                </p>
                <p>Ward: {user?.ward}</p>
                <p>LGA: {user?.lga}</p>
                <p>State: {user?.stateOfResidence}</p>
              </div>
            </div>
            {/* <div className="flex items-center justify-between my-4 w-[30%]">
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
            </div> */}
            <hr className="w-[30%] mb-4" />
            <Formik enableReinitialize initialValues={initialState} onSubmit={registerMember} validationSchema={RegisterSchema}>
              {(props: FormikProps<Values>) => (
                // {({ values, handleChange, setFieldValue, handleBlur }) => (

                <Form className="">
                  <div className="relative w-[30%]">
                    <div>
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320 whitespace-nowrap" title="Referal Email" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 !w-[350px] smallLaptop:!w-full"
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="referredBy"
                        placeholder="Enter the referal email"
                        type="email"
                      />
                    </div>
                    <FormikCustomCheckbox
                      checked={props.values.terms}
                      className="!border-black w-12 h-12  rounded-lg"
                      label="Please check to acknowledge Privacy/terms policy"
                      labelClassName="text-14 smallLaptop:text-16 font-normal whitespace-nowrap"
                      labelPosition="end"
                      name="terms"
                      onChange={props.handleChange}
                      type="checkbox"
                    />
                    {transaction !== null ? (
                      <CustomButton
                        customClass="mt-12 !w-full smallLaptop:!w-[80%] mb-8 smallLaptop:mb-0"
                        handleClick={() => window.open(`${transaction.data.authorization_url}`, "_blank")}
                        isDisabled={loading}
                        isSubmitting={loading}
                        size={ButtonProperties.SIZES.big}
                        title="Pay Now"
                        variant={ButtonProperties.VARIANT.secondary.name}
                      />
                    ) : (
                      <CustomButton
                        customClass="mt-12 !w-full smallLaptop:!w-[80%] mb-8 smallLaptop:mb-0"
                        handleClick={() => {}}
                        isDisabled={loading}
                        isSubmitting={loading}
                        size={ButtonProperties.SIZES.big}
                        title="Initialize Payment"
                        type="submit"
                        variant={ButtonProperties.VARIANT.secondary.name}
                      />
                    )}
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
