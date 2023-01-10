import React from "react";

import Icon from "@components/atoms/Icons";

import { changeDateFormat } from "@shared/libs/helpers";

import { TransactionProp } from "./WalletTransactions";

interface TransactionItemProps {
  transaction: TransactionProp;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <>
      <div className="flex items-center my-6 justify-between">
        <div className="flex items-center">
          <div className="bg-gray-100 rounded-[6px] flex items-center justify-center w-[52px] h-[49px] p-4">
            <Icon name="card2" />
          </div>
          <div className="ml-2">
            <p className="font-medium capitalize">{transaction.transactionType}</p>
            <p className="text-14 mt-2 text-obiGray-320">{changeDateFormat(transaction?.createdAt, "DD MMM YYYY - LT")}</p>
          </div>
        </div>
        <p className="ml-8">
          {" "}
          + {transaction.amount} {transaction?.currency}
        </p>
      </div>
      <hr />
    </>
  );
};

export default TransactionItem;
