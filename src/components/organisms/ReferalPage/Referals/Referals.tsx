import React, { useEffect, useMemo } from "react";
import { ImSpinner9 } from "react-icons/im";

import CustomTable from "@components/atoms/CustomTable/CustomTable";
import RenderMembershipStatus from "@components/organisms/DashBoardPage/RenderMembershipStatus/RenderTransactionStatus";
import TopBar from "@components/organisms/DashBoardPage/TopBar/TopBar";

import useAuth from "@hooks/useAuth";

import { setAuthToken } from "@shared/libs/helpers";

const Referals = () => {
  const { loadUser, getAllRefs, allRefs, loading } = useAuth();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  useEffect(() => {
    loadUser();
    getAllRefs();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        Cell: (props: any) => {
          return <p className="text-14 mt-2 text-obiGray-320">{props.value}</p>;
        },
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        Cell: (props: any) => {
          return <p className="text-14 mt-2 text-obiGray-320">{props.value}</p>;
        },
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: (props: any) => {
          return <p className="text-14 mt-2 text-obiGray-320">{props.value}</p>;
        },
      },
      {
        Header: "Phone",
        accessor: "phoneNumber",
        Cell: (props: any) => {
          return <p className="text-14 mt-2 text-obiGray-320">{props.value}</p>;
        },
      },
      {
        Header: "Subscription",
        accessor: "status",
        Cell: (props: any) => {
          return <RenderMembershipStatus status={props?.row?.original?.current_subscription?.status || "inactive"} />;
        },
      },
    ],
    []
  );

  const finalData: any = useMemo(() => allRefs, [allRefs]);

  return (
    <div className="pl-4 bigLaptop:pl-[48px]">
      <TopBar />
      <div>
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
    </div>
  );
};

export default Referals;
