import React from "react";
import {
  ClockIcon,
  ConsultationTimeContainer,
  ConsultationTimeLabel,
} from "./Style";

export const ConsultationTime = ({ timeText }) => {
  return (
    <ConsultationTimeContainer>
      <ClockIcon />
      <ConsultationTimeLabel>{timeText}</ConsultationTimeLabel>
    </ConsultationTimeContainer>
  );
};
