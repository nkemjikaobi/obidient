import React, { useEffect } from "react";

import useAuth from "@hooks/useAuth";

import TransactionItem from "./TransactionItem";

export interface TransactionProp {
  id: number;
  transactionType: string;
  createdAt: Date;
  amount: string;
  currency: string;
}

const WalletTransactions = () => {
  const { getTransactions, allTransactions } = useAuth();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="px-6 mt-4 smallLaptop:mt-0 smallLaptop:px-[46px]">
      <h4 className="text-16 smallLaptop:text-18 mt-[35px] mb-[15px]">Transactions</h4>
      <div>{allTransactions && allTransactions.map((transaction: TransactionProp) => <TransactionItem key={transaction.id} transaction={transaction} />)}</div>
    </div>
  );
};

export default WalletTransactions;
