import React from "react";
import {
  ClockIcon,
  ConsultationTimeContainer,
  ConsultationTimeLabel,
} from "./Style";

export const ConsultationTime = ({ situacao, timeText }) => {
  return (
    <ConsultationTimeContainer situacao={situacao} >
      <ClockIcon situacao={situacao} />
      <ConsultationTimeLabel situacao={situacao}>{timeText}</ConsultationTimeLabel>
    </ConsultationTimeContainer>
  );
};
