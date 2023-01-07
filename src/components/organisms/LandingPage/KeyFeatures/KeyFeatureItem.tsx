import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

import { KeyFeatureProp } from "./KeyFeatures";

interface KeyFeatureItemProps {
  item: KeyFeatureProp;
}

const KeyFeatureItem: React.FC<KeyFeatureItemProps> = ({ item }) => {
  return (
    <div className="relative bigLaptop:mr-[33px] bigLaptop:even:mt-40 w-[320px] h-[401px] smallLaptop:w-[380px] smallLaptop:h-[501px] bigLaptop:w-[457px] bigLaptop:h-[601px] mb-8">
      <Image alt="" fill src={item.imageUrl} />
      <Icon className="left-[48px] top-[39px] absolute" name="desktop" />
      <div className="absolute bottom-10 text-white pl-4 bigLaptop:pl-[48px] bigLaptop:w-[457px] bg-gradient-keyFeature">
        <p className="font-semibold text-[30px] whitespace-pre-line">{item.name}</p>
        <p className="w-[256px] text-obiGray-250 opacity-80 text-14 mt-2">{item.info}</p>
      </div>
    </div>
  );
};

export default KeyFeatureItem;
