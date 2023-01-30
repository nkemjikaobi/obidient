/* eslint-disable react/display-name */
import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import useAuth from "@hooks/useAuth";
import useWallet from "@hooks/useWallet";

import { ButtonProperties } from "@shared/libs/helpers";

const MembershipCard = React.forwardRef(({ handlePrint }: any, ref: any) => {
  const { nftMetaData } = useWallet();
  const { user } = useAuth();

  return (
    <div className="bg-white px-4 tablet:px-12 mt-8 smallLaptop:mt-0 smallLaptop:px-[34px] pt-[44px] rounded-[20px] smallLaptop:w-[380px] television:w-[480px] bigLaptop:h-[600px] television:h-[543.88px] pb-8">
      <div className="flex flex-col television:flex-row texlevision:items-center justify-between mb-6">
        <h4 className="text-18 mb-6 whitespace-nowrap">NFT Membership Card</h4>
        <CustomButton
          customClass="!rounded-[5px] television:ml-[113px] television:mr-[43px]"
          handleClick={() => handlePrint()}
          size={ButtonProperties.SIZES.small}
          title="Print Card"
          variant={ButtonProperties.VARIANT.primary.name}
        />{" "}
      </div>
      {nftMetaData || user ? (
        <div className="television:w-[409px] h-[394px] relative" ref={ref}>
          <Image alt="" layout="fill" src="/images/png/nftBackground1.png" />
          <div className="absolute top-5 text-white p-6 text-18">
            <div className="flex item-center justify-between television:w-[329px] mb-8">
              <div>
                <p className="font-bold text-24">Obidient</p>
                <p className="text-16 mr-2 mt-2">NFT Membership Card</p>
              </div>
              <Image alt="" height={83} src={nftMetaData?.profileImageUrl || user?.profileImageUrl || "/images/png/confirmDp2.png"} width={85} />
            </div>
            <div className="">
              <p className="uppercase">
                {nftMetaData?.firstName || user?.firstName} {nftMetaData?.lastName || user?.lastName}
              </p>
              <div>
                <p className="text-gray-300 my-6">
                  WARD {nftMetaData?.ward || user?.ward} - LGA {nftMetaData?.lga || user?.lga}
                </p>
                <p className="">{nftMetaData?.pollingUnit || user?.pollingUnit}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>No membership card found</>
      )}
    </div>
  );
});

export default MembershipCard;
