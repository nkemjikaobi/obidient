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
          <Image alt="" layout="fill" src="/images/png/nftBackground1.png" />
          <div className="absolute top-5 text-white p-6 text-18">
            <div className="flex item-center justify-between television:w-[329px] mb-8">
              <div>
                <p className="font-bold text-24">Obidient</p>
                <p className="text-16 mt-2">NFT Membership Card</p>
              </div>
              <Image alt="" height={83} src={nftMetaData.profileImageUrl || "/images/png/confirmDp2.png"} width={85} />
            </div>
            <div className="">
              <p className="uppercase">
                {nftMetaData.firstName} {nftMetaData.lastName}
              </p>
              <div>
                <p className="text-gray-300 my-6">
                  WARD {nftMetaData.ward} - LGA {nftMetaData.lga}
                </p>
                <p className="">{nftMetaData.pollingUnit}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>No membership card found</>
      )}
    </div>
  );
};

export default MembershipCard;
