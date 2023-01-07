import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import FormikCustomSelect from "@components/atoms/FormikCustomSelect/FormikCustomSelect";
import Icon from "@components/atoms/Icons";

import { ButtonProperties, errorMessages, subtractYears } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";

const MembershipForm = () => {
  const { getRootProps, getInputProps } = useDropzone();
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  const initialState = {
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    sex: "",
    postCode: "",
    occupation: "",
    state: "",
    resident: "",
    lga: "",
    ward: "",
    pollingUnit: "",
    kycType: "",
  };

  interface Values {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    sex: string;
    postCode: string;
    occupation: string;
    state: string;
    resident: string;
    lga: string;
    ward: string;
    pollingUnit: string;
    kycType: string;
  }

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(errorMessages.required),
    phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    sex: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    postCode: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    occupation: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    state: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    resident: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    lga: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    ward: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    pollingUnit: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    kycType: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  });

  const registerMember = () => {};

  const genderOptions = [
    {
      text: "male",
      value: "male",
    },
    {
      text: "female",
      value: "female",
    },
  ];

  return (
    <div className="px-[164px] pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <Icon name="caretLeft" />
          <p className="font-semibold ml-2">Go Back</p>
        </div>
        <h3 className="text-[40px] font-semibold">Membership Registration Form</h3>
        <span className="text-14">
          Have an account? <span className="text-obiBlue-200 ml-2">Sign In</span>
        </span>
      </div>
      <p className="text-14 text-[#828282] pt-[52px]">Kindly fill in your details to continue</p>
      <div>
        <Formik enableReinitialize initialValues={initialState} onSubmit={registerMember} validationSchema={RegisterSchema}>
          {(props: FormikProps<Values>) => (
            <Form className="flex">
              <div>
                <div className="relative">
                  <h3 className="font-semibold text-18 mt-12">1. Contact Information</h3>
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-sm border-black"
                    name="email"
                    placeholder="Enter Your Email Address"
                    type="email"
                  />
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-sm border-black"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    type="tel"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-18 mb-4 mt-12">2. Personal Information</h3>
                  <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Profile Image (Passport photograph)" />
                  <div className="cursor-pointer relative mt-4" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <CustomInput
                      className="border border-glass-450 rounded-[0.313rem] mr-[35px] mt-2"
                      disabled={true}
                      inputClassName="placeholder:text-sm"
                      name="search"
                      placeholder="Click here to select a file"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <div>
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="First Name" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="firstName"
                        placeholder="John"
                        type="text"
                      />
                    </div>
                    <div>
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Last Name" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="lastName"
                        placeholder="Doe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Age" />
                      <DatePicker
                        customInput={
                          <CustomInput
                            className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
                            container=""
                            icon="calendar2"
                            iconPosition="end"
                            id="date"
                            inputClassName="placeholder:text-sm mobileBelow:ml-4 border-black bg-citiBlue-80"
                            name="dateOfBirth"
                            type="text"
                          />
                        }
                        dateFormat="yyyy-MM-dd"
                        maxDate={subtractYears(18)}
                        name="dateOfBirth"
                        onChange={(date: Date) => setDepartureDate(date)}
                        placeholderText="Date of Birth"
                        required
                        selected={departureDate}
                        showMonthDropdown
                        showYearDropdown
                      />
                    </div>
                    <div>
                      <FormikCustomSelect className="h-16 rounded-md border w-[200px] !text-obiGray-320" name="sex" options={genderOptions} parentContainer="!border-obiGray-320" />
                    </div>
                    <div>
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Post Code" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="postCode"
                        placeholder="198732"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <div className="w-[50%]">
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Occupation" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="occupation"
                        placeholder="Teacher"
                        type="text"
                      />
                    </div>
                    <div className="w-[50%]">
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="State of Residence" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="state"
                        placeholder="Lagos"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <div className="w-full">
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Residential Address" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="resident"
                        placeholder="Plot 104, Adamu Estate"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <div className="w-[50%]">
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Local Government" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="lga"
                        placeholder="Ikeja"
                        type="text"
                      />
                    </div>
                    <div className="w-[50%]">
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Ward" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="ward"
                        placeholder="Ikate"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <div className="w-full">
                      <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Polling Unit" />
                      <FormikCustomInput
                        className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                        container="tablet:px-6"
                        inputClassName="placeholder:text-sm border-black"
                        name="pollingUnit"
                        placeholder="Gwagalada"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative ml-12">
                <h3 className="font-semibold text-18 mt-12">3. KYC</h3>
                <p className="text-14 text-obiGray-320 my-4">Select preferred option and upload document</p>
                <div>
                  <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Kyc Document" />
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-sm border-black"
                    name="kycType"
                    placeholder="NIN, BVN, PASSPORT NUMBER"
                    type="text"
                  />
                </div>
                <div>
                  <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Upload kyc document" />
                  <div className="cursor-pointer relative mt-4" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <CustomInput
                      className="border border-glass-450 rounded-[0.313rem] mr-[35px] mt-2"
                      disabled={true}
                      inputClassName="placeholder:text-sm"
                      name="search"
                      placeholder="Click here to select a file"
                      type="text"
                    />
                  </div>
                </div>
                <CustomButton
                  customClass="mt-12 !w-[80%]"
                  handleClick={() => {}}
                  size={ButtonProperties.SIZES.big}
                  title="Save & Continue"
                  type="submit"
                  variant={ButtonProperties.VARIANT.secondary.name}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MembershipForm;
