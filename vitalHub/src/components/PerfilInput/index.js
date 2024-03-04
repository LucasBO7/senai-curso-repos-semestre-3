import React from "react";
import { Input, PerfilInputContainer, PerfilInputLabel } from "./Style";

export const PerfilInput = ({
  inputLabel,
  inputPlaceholder,
  containerWidth,
  inputType,
}) => {
  return (
    <PerfilInputContainer width={containerWidth}>
      <PerfilInputLabel>{inputLabel}</PerfilInputLabel>
      <Input keyboardType={inputType} placeholder={inputPlaceholder} />
    </PerfilInputContainer>
  );
};
