import React from "react";
import { ButtonContainer, ButtonText } from "./Style";

export const ConsultStatusButton = ({ isBtnActivated, btnText, onPress }) => {
  return (
    <ButtonContainer isBtnActivated={isBtnActivated} onPress={onPress}>
      <ButtonText isBtnActivated={isBtnActivated}>
        {btnText}
      </ButtonText>
    </ButtonContainer>
  );
};