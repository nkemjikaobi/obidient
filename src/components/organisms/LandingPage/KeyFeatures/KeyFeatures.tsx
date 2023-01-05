import React from "react";

import KeyFeatureItem from "./KeyFeatureItem";

export interface KeyFeatureProp {
  id: number;
  imageUrl: string;
  name: string;
  info: string;
}

const KeyFeatures = () => {
  return (
    <div className="">
      <h3 className="text-center text-40 mb-[114px]">Key Features</h3>
      <div className="flex items-center mb-[87px]">
        {KeyFeaturesData.map((data) => (
          <KeyFeatureItem item={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;

const KeyFeaturesData: KeyFeatureProp[] = [
  {
    id: 1,
    imageUrl: "/images/png/keyFeature1.png",
    name: "Membership management",
    info: "Create accounts with a blockchain wallet address",
  },
  {
    id: 2,
    imageUrl: "/images/png/keyFeature2.png",
    name: "NFT Membership Card",
    info: "Create accounts with a blockchain wallet address",
  },
  {
    id: 3,
    imageUrl: "/images/png/keyFeature3.png",
    name: "Decentralized Token Exchange",
    info: "Create accounts with a blockchain wallet address",
  },
];
