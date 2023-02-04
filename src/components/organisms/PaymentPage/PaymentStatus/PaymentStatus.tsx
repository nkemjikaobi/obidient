import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { showToast } from "src/helpers/showToast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import { ButtonProperties, NotificationTypes, changeDateFormat } from "@shared/libs/helpers";

const PaymentStatus = () => {
  const router = useRouter();
  const { reference } = router.query;
  const [status, setStatus] = useState<boolean>(false);
  const [paymentDetails, setPaymentDetails] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const verifyTransaction = async (reference: any) => {
    const config = {
      headers: {
        authorization: `Bearer ${typeof window !== "undefined" && localStorage.token ? localStorage.getItem("token") : ""}`,
      },
    };
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/payment/verify?reference=${reference}`, config);
      setPaymentDetails(res.data.data.data);
      if (res.data.data.data.status === "success") {
        setStatus(true);
        setLoading(false);
      }
    } catch (error: any) {
      setStatus(false);
      setLoading(false);
      showToast(error.response.data.message, NotificationTypes.ERROR);
    }
  };

  useEffect(() => {
    if (reference) {
      verifyTransaction(reference);
    }
  }, [reference]);
  return (
    <>
      {loading ? (
        <div className="w-full grid place-content-center h-[calc(100vh-100px)]">
          <ImSpinner9 className="animate-spin text-4xl" />
        </div>
      ) : (
        <div className="tablet:w-[625px] h-[700px] pt-5 tablet:pt-12 bg-white tablet:m-auto mt-2">
          <div
            className={`bg-[#E8F3F9] w-[70px] h-[70px] tablet:w-[103px] tablet:h-[103px] m-auto rounded-full flex justify-center items-center ${!true ? "bg-citiRed-100" : ""} `}
          >
            <Icon name={status ? "blueTick" : "redCrossShield"} />
          </div>

          <div className="px-6">
            <h1 className="font-bold text-24 text-center mt-8 tablet:text-40">{status ? "Payment Success" : "Payment Failed"}</h1>
            {status ? (
              <p className="text-center text-14 mt-2 leading-5 tablet:text-16">
                Your payment of {paymentDetails?.currency} {Number(paymentDetails?.amount / 100).toLocaleString()} for registration services by{" "}
                {paymentDetails?.metadata?.first_name} {paymentDetails?.metadata?.last_name} has been {status ? "confirmed" : "declined"}
              </p>
            ) : (
              <p className="text-center text-14 mt-2 leading-5 tablet:text-16">Your payment has been declined</p>
            )}
            <div className="flex justify-between mt-8 text-12 tablet:text-14">
              <p>Date</p>
              <p>{changeDateFormat(paymentDetails?.paidAt, "DD MMM YYYY - LT")}</p>
            </div>
            {status && (
              <p className={`p-4 bg-[#E8F3F9] rounded-md text-10 mt-4 font-bold tablet:text-14 text-center text-[#093851] uppercase`}>
                ORDER REFERENCE: {paymentDetails?.reference}
              </p>
            )}
            <div className=" mt-6">
              <h1 className="text-citiBlue-400 text-12 font-bold tablet:text-10">PAYMENT DETAILS</h1>
              <div>
                <div>
                  <div className="flex justify-between mt-4 text-12 tablet:text-14">
                    <p className="font-bold">PLAN</p>
                    <p>{paymentDetails?.metadata?.plan_label}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 mb-14 tablet:w-[70%] tablet:m-auto tablet:mt-10 tablet:mb-14">
              <CustomButton
                customClass="text-12 !w-full font-bold bg-citiBlue-400"
                handleClick={() => router.push("/dashboard")}
                isDisabled={!status}
                size={ButtonProperties.SIZES.big}
                title={"PROCEED TO DASHBOARD"}
                variant={ButtonProperties.VARIANT.secondary.name}
              />
              <CustomLink customClass="text-center mt-6 underline" destination="/auth/membership-form-payment">
                Go Back to Payment
              </CustomLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentStatus;
