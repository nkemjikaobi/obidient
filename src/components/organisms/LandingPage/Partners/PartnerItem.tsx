import React from "react";

import Icon from "@components/atoms/Icons";

import { PartnerProp } from "./Partners";

interface PartnerItemProps {
  partner: PartnerProp;
}

const PartnerItem: React.FC<PartnerItemProps> = ({ partner }) => {
  return (
    <div>
      <Icon name={partner.name} />
    </div>
  );
};

export default PartnerItem;
