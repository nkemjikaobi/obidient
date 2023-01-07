import React, { useMemo } from "react";

import CustomTable from "@components/atoms/CustomTable/CustomTable";
import Icon from "@components/atoms/Icons";

import RenderTransactionStatus from "../RenderTransactionStatus/RenderTransactionStatus";

const FiatPayments = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Activity",
        Cell: (props: any) => {
          return (
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-[6px] flex items-center justify-center w-[52px] h-[49px] p-4">
                <Icon name="card2" />
              </div>
              <div className="ml-2">
                <p className="font-medium">Fiat Payment</p>
                <p className="text-14 mt-2 text-obiGray-320">25 Dec 2022</p>
              </div>
            </div>
          );
        },
      },
      {
        Header: "Transaction ID",
        accessor: "transactionId",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "ORDER STATUS",
        accessor: "orderStatus",
        Cell: (props: any) => {
          return <RenderTransactionStatus productState={props.value} />;
        },
      },
      {
        Header: "AMOUNT",
        accessor: "amount",
        Cell: (props: any) => {
          return <div className="whitespace-nowrap">{props?.value ? `${Number(props?.value).toLocaleString()} LPO` : "No Price"}</div>;
        },
      },
    ],
    []
  );

  const finalData: any = useMemo(() => fiatData, [fiatData]);
  return (
    <div>
      <CustomTable columns={columns} data={finalData} tdClass="!py-8 !p-6" thClass="!py-8 !p-6" tHeadClass="whitespace-nowrap" />
    </div>
  );
};

export default FiatPayments;

const fiatData = [
  {
    transactionId: "DUT368",
    description: "a nice one",
    orderStatus: "successful",
    amount: "3000",
  },
  {
    transactionId: "DUT368",
    description: "a nice one",
    orderStatus: "successful",
    amount: "3000",
  },
  {
    transactionId: "DUT368",
    description: "a nice one",
    orderStatus: "successful",
    amount: "3000",
  },
  {
    transactionId: "DUT368",
    description: "a nice one",
    orderStatus: "successful",
    amount: "3000",
  },
  {
    transactionId: "DUT368",
    description: "a nice one",
    orderStatus: "successful",
    amount: "3000",
  },
];
