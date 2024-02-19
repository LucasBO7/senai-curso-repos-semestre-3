import React from "react";
import { QueryStatusButtonContainer, QueryStatusText } from "./Style";

export const QueryStatusButton = ({ isBtnActivated, btnText, onPress }) => {
  return (
    <QueryStatusButtonContainer isBtnActivated={isBtnActivated} onPress={onPress}>
      <QueryStatusText isBtnActivated={isBtnActivated}>
        {btnText}
      </QueryStatusText>
    </QueryStatusButtonContainer>
  );
};
