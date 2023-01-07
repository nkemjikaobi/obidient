import React from "react";

import PartnerItem from "./PartnerItem";

export interface PartnerProp {
  id: number;
  name: string;
}

const Partners = () => {
  return (
    <div className="grid grid-cols-2 tablet:grid-cols-3 smallLaptop:grid-cols-4 py-[70px] smallLaptop:px-24">
      {PartnersData.map((partner) => (
        <PartnerItem key={partner.id} partner={partner} />
      ))}
    </div>
  );
};

export default Partners;

const PartnersData: PartnerProp[] = [
  {
    id: 1,
    name: "microsoft",
  },
  {
    id: 2,
    name: "ola",
  },
  {
    id: 3,
    name: "walmart",
  },
  {
    id: 4,
    name: "oyo",
  },
];
