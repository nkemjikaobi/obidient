import Image from "next/image";
import React from "react";

const MembershipCard = () => {
  return (
    <div className="bg-white px-4 tablet:px-12 mt-8 smallLaptop:mt-0 smallLaptop:px-[34px] pt-[44px] rounded-[20px] smallLaptop:w-[380px] television:w-[480px] smallLaptop:h-[513.88px] pb-8">
      <h4 className="text-18 mb-6">NFT Membership Card</h4>
      <div className="television:w-[409px] h-[394px] relative">
        <Image alt="" layout="fill" src="/images/png/nftBackground.png" />
        <div className="absolute top-5 text-white p-6 text-18">
          <Image alt="" height={73} src="/images/png/confirmDp2.png" width={65} />
          <p className="my-2">Name: Nkemjika Obi</p>
          <p className="my-2">Ward: 2</p>
          <p className="my-2">State: Ogun</p>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
