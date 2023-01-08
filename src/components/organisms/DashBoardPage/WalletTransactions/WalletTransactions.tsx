import React from "react";

import TransactionItem from "./TransactionItem";

export interface TransactionProp {
  id: number;
  transactionType: string;
  createdAt: string;
  amount: string;
}

const WalletTransactions = () => {
  return (
    <div className="px-6 mt-4 smallLaptop:mt-0 smallLaptop:px-[46px]">
      <h4 className="text-16 smallLaptop:text-18 mt-[35px] mb-[15px]">Transactions</h4>
      <div>
        {data.map((transaction: TransactionProp) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default WalletTransactions;

const data: TransactionProp[] = [
  {
    id: 1,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 2,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 3,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 4,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 5,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 6,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 7,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 8,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 9,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
  {
    id: 10,
    transactionType: "Cash Deposit",
    createdAt: "25 Dec 2022",
    amount: "1000",
  },
];
