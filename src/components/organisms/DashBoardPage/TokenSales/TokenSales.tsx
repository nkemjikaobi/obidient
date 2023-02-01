import React, { useMemo } from "react";
import { ImSpinner9 } from "react-icons/im";

import CustomTable from "@components/atoms/CustomTable/CustomTable";
import Icon from "@components/atoms/Icons";

import useAuth from "@hooks/useAuth";

import { changeDateFormat } from "@shared/libs/helpers";

import RenderTransactionStatus from "../RenderTransactionStatus/RenderTransactionStatus";

const TokenSales = () => {
  const { allTransactions, loading } = useAuth();
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
                <p className="font-medium">{props.row.original.transactionType}</p>
                <p className="text-14 mt-2 text-obiGray-320">{changeDateFormat(props.row.original.createdAt, "DD MMM YYYY - LT")}</p>
              </div>
            </div>
          );
        },
      },
      {
        Header: "Transaction ID",
        accessor: "reference",
        Cell: (props: any) => {
          return <p className="text-14 mt-2 text-obiGray-320 uppercase">{props.value}</p>;
        },
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: (props: any) => {
          return <p className="text-14 mt-2 text-obiGray-320">{props.value || "No description"}</p>;
        },
      },
      {
        Header: "ORDER STATUS",
        accessor: "status",
        Cell: (props: any) => {
          return <RenderTransactionStatus productState={props.value} />;
        },
      },
      {
        Header: "AMOUNT",
        accessor: "amount",
        Cell: (props: any) => {
          return <div className="whitespace-nowrap">{props?.value ? `${Number(props?.value).toLocaleString()} ${props.row.original.currency}` : "No Price"}</div>;
        },
      },
    ],
    []
  );

  const finalData: any = useMemo(() => allTransactions, [allTransactions]);
  return (
    <div className="overflow-x-scroll">
      {loading ? (
        <div className="w-full grid place-content-center pt-12">
          <div className="flex items-center">
            <ImSpinner9 className="animate-spin mr-2 text-2xl" /> <span className="text-14">Fetching data...</span>
          </div>
        </div>
      ) : (
        <CustomTable columns={columns} data={finalData} tdClass="!py-8 !p-6" thClass="!py-8 !p-6" tHeadClass="whitespace-nowrap" />
      )}
    </div>
  );
};

export default TokenSales;
