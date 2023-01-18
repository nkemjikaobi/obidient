import Image from "next/image";
import React from "react";

import useWallet from "@hooks/useWallet";

const MembershipCard = () => {
  const { nftMetaData } = useWallet();
  return (
    <div className="bg-white px-4 tablet:px-12 mt-8 smallLaptop:mt-0 smallLaptop:px-[34px] pt-[44px] rounded-[20px] smallLaptop:w-[380px] television:w-[480px] smallLaptop:h-[513.88px] pb-8">
      <h4 className="text-18 mb-6">NFT Membership Card</h4>
      {nftMetaData ? (
        <div className="television:w-[409px] h-[394px] relative">
          <Image alt="" layout="fill" src="/images/png/nftBackground.png" />
          <div className="absolute top-5 text-white p-6 text-18">
            <Image alt="" height={73} src="/images/png/confirmDp2.png" width={65} />
            <p className="my-2">
              Name: {nftMetaData.firstName} {nftMetaData.lastName}
            </p>
            <p className="my-2">Ward: {nftMetaData.ward}</p>
            <p className="my-2">LGA: {nftMetaData.lga}</p>
            <p className="my-2">Polling Unit: {nftMetaData.pollingUnit}</p>
          </div>
        </div>
      ) : (
        <>No membership card found</>
      )}
    </div>
  );
};

export default MembershipCard;
