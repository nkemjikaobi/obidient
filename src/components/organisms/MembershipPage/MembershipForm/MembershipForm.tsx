import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDropzone } from "react-dropzone";
import { showToast } from "src/helpers/showToast";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import FormikCustomSelect from "@components/atoms/FormikCustomSelect/FormikCustomSelect";
import Icon from "@components/atoms/Icons";

import useAuth from "@hooks/useAuth";
import useFileUpload from "@hooks/useFileUpload";
import useWallet from "@hooks/useWallet";

import { ButtonProperties, NotificationTypes, errorMessages, subtractYears } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";

const MembershipForm = () => {
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
  });
  const [departureDate, setDepartureDate] = useState<any>(null);
  const [kycData, setKycData] = useState<any>();
  const { user, membershipRegistration, loading } = useAuth();

  const router = useRouter();

  const [{ data: fileUploadData, loading: fileUploadLoading }, uploadImage] = useFileUpload();
  const { address } = useWallet();

  useEffect(() => {
    if (fileUploadData) {
      setKycData(fileUploadData);
    }
  }, [fileUploadData]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      uploadImage(acceptedFiles);
    }
  }, [acceptedFiles]);

  useEffect(() => {
    if (fileRejections.length > 0) {
      fileRejections.map((rejection: any) => rejection.errors.map((error: any) => showToast(error.message, NotificationTypes.ERROR)));
    }
  }, [fileRejections]);

  const initialState = {
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    firstName: user?.firstName,
    lastName: user?.lastName,
    sex: user?.sex,
    postCode: user?.postCode,
    occupation: user?.occupation,
    stateOfResidence: user?.stateOfResidence,
    residentialAddress: user?.residentialAddress,
    lga: user?.lga,
    ward: user?.ward,
    pollingUnit: user?.pollingUnit,
    kycType: user?.kycType || "nin",
    kycNumber: "",
  };

  interface Values {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    sex: string;
    postCode: string;
    occupation: string;
    stateOfResidence: string;
    residentialAddress: string;
    lga: string;
    ward: string;
    pollingUnit: string;
    kycType: string;
    kycNumber: string;
  }

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(errorMessages.required),
    phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    sex: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    postCode: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    occupation: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    stateOfResidence: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    residentialAddress: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    lga: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    ward: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    pollingUnit: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    kycType: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    kycNumber: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  });

  const registerMember = async (values: Values) => {
    if (!address) {
      return showToast("Connect Wallet", NotificationTypes.ERROR);
    }

    if (!kycData) {
      return showToast("Upload Profile Picture", NotificationTypes.ERROR);
    }
    const transformedValues = { ...values, user_id: user._id, age: departureDate, profileImageUrl: kycData?.url, kycPublicId: kycData?.public_id, wallet_address: address };
    await membershipRegistration(transformedValues, router);
  };

  const genderOptions = [
    {
      text: "male",
      value: "male",
    },
    {
      text: "female",
      value: "female",
    },
    {
      text: "other",
      value: "other",
    },
  ];

  const kycOptions = [
    {
      text: "nin",
      value: "nin",
    },
    {
      text: "bvn",
      value: "bvn",
    },
    {
      text: "passport",
      value: "passport",
    },
    {
      text: "voter's card",
      value: "voters_card",
    },
  ];

  return (
    <div className="px-8 bigLaptop:px-[100px] television:px-[164px] pt-8">
      <div className="hidden smallLaptop:flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <Icon name="caretLeft" />
          <p className="font-semibold ml-2 whitespace-nowrap" onClick={() => router.push("/auth/login")}>
            Go Back
          </p>
        </div>
        <h3 className="text-[27px] bigLaptop:text-[40px] font-semibold">Membership Registration Form</h3>
        <span className="text-14">All fields are required *</span>
      </div>
      <p className="hidden smallLaptop:blocktext-14 text-[#828282] pt-[52px]">Kindly fill in your details to continue</p>
      <div>
        <Formik enableReinitialize initialValues={initialState} onSubmit={registerMember} validationSchema={RegisterSchema}>
          {(props: FormikProps<Values>) => (
            <Form className="flex flex-col smallLaptop:flex-row">
              <div>
                <div className="relative">
                  <h3 className="font-semibold text-18 mt-12 mb-2">1. Contact Information</h3>
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    disabled={true}
                    inputClassName="placeholder:text-sm border-black"
                    name="email"
                    placeholder="Enter Your Email Address"
                    type="email"
                  />
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    disabled={true}
                    inputClassName="placeholder:text-sm border-black"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    type="tel"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-18 mb-4 mt-12">2. Personal Information</h3>
                  {/* <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Profile Image (Passport photograph)" />
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
                  </div> */}
                  <div className="flex items-center space-x-4 mt-8">
                    <div className="w-[50%]">
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
                    <div className="w-[50%]">
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
                  <div className="flex flex-col smallLaptop:flex-row smallLaptop:items-center smallLaptop:space-x-4">
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
                    <div className="mt-4 smallLaptop:mt-0">
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
                        name="stateOfResidence"
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
                        name="residentialAddress"
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

              <div className="relative smallLaptop:ml-12">
                <h3 className="font-semibold text-18 mt-12">3. KYC</h3>
                <p className="text-14 text-obiGray-320 my-4">Select preferred option and upload document</p>
                <div>
                  <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Kyc Document" />
                  {/* <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-sm border-black"
                    name="kycType"
                    placeholder="NIN, BVN, PASSPORT NUMBER"
                    type="text"
                  /> */}
                  <div>
                    <FormikCustomSelect
                      className="h-16 rounded-md border w-full capitalize !text-obiGray-320"
                      name="kycType"
                      options={kycOptions}
                      parentContainer="!border-obiGray-320"
                    />
                  </div>
                  <div className="w-full mt-8">
                    <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Enter identity number for kyc" />
                    <FormikCustomInput
                      className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                      container="tablet:px-6"
                      inputClassName="placeholder:text-sm border-black"
                      name="kycNumber"
                      placeholder="98726281834"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <CustomLabel className="mb-[0.438rem] text-14 text-obiGray-320" title="Upload Profile Picture" />
                  <div className="cursor-pointer relative mt-4" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <CustomInput
                      className="border border-glass-450 rounded-[0.313rem] mr-[35px] mt-2"
                      disabled={true}
                      inputClassName="placeholder:text-sm"
                      name="search"
                      placeholder={`${
                        fileUploadLoading
                          ? "Uploading..."
                          : (kycData && kycData.length === 0) || kycData === undefined
                          ? "Click here to select a file"
                          : `${kycData.original_filename}.${kycData.format}`
                      }`}
                      type="text"
                    />
                  </div>
                </div>
                <CustomButton
                  customClass="mt-12 !w-full smallLaptop:!w-[80%] mb-8 smallLaptop:mb-0"
                  handleClick={() => {}}
                  isDisabled={loading}
                  isSubmitting={loading}
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
