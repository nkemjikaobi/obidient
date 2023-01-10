import React from "react";

import { TransactionStatus } from "@shared/libs/helpers";

interface RenderTransactionStatusProps {
  productState?: string;
}
const RenderTransactionStatus = ({ productState }: RenderTransactionStatusProps) => {
  return (
    <>
      {productState === TransactionStatus.SUCCESSFUL ? (
        <p className="flex w-[89px] h-6 items-center bg-[#EBFDEB] text-green-800 px-4 text-12 rounded-[7px] whitespace-nowrap">Successful</p>
      ) : (
        <p className="flex w-[89px] h-6 items-center bg-red-100 text-red-500 px-4 text-12 rounded-[7px] whitespace-nowrap">Failed</p>
      )}
    </>
  );
};

export default RenderTransactionStatus;

RenderTransactionStatus.defaultProps = {
  productState: "",
};
