import React from "react";
import { QueryStatusButtonContainer, QueryStatusText } from "./Style";

export const QueryStatusButton = ({ isBtnActivated, btnText }) => {
  return (
    <QueryStatusButtonContainer isBtnActivated={isBtnActivated}>
      <QueryStatusText isBtnActivated={isBtnActivated}>
        {btnText}
      </QueryStatusText>
    </QueryStatusButtonContainer>
  );
};
