import React from "react";
import {
  ClockIcon,
  ConsultationTimeContainer,
  ConsultationTimeLabel,
} from "./Style";

export const ConsultationTime = ({ timeText, timeContainerColor, timeContentColor }) => {
  return (
    <ConsultationTimeContainer timeContainerColor={timeContainerColor} >
      <ClockIcon timeContentColor={timeContentColor} />
      <ConsultationTimeLabel timeContentColor={timeContentColor}>{timeText}</ConsultationTimeLabel>
    </ConsultationTimeContainer>
  );
};
