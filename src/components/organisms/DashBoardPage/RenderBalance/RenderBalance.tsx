import React from "react";

import GovernanceTokenBalance from "../GovernanceTokenBalance/GovernanceTokenBalance";
import TotalBalance from "../TotalBalance/TotalBalance";
import UtilityTokenBalance from "../UtilityTokenBalance/UtilityTokenBalance";

interface RenderBalanceProps {
  balanceToRender: number;
}

const RenderBalance: React.FC<RenderBalanceProps> = ({ balanceToRender }) => {
  return <>{balanceToRender === 1 ? <TotalBalance /> : balanceToRender === 2 ? <GovernanceTokenBalance /> : <UtilityTokenBalance />}</>;
};

export default RenderBalance;
