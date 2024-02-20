import styled from "styled-components";
import { QueryCategory } from "../Subtitle/Style";
import { AntDesign } from "@expo/vector-icons";

export const ConsultationTimeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 7px;
  border-radius: 5px;

  width: 45.45%;
  height: 26px;
  background-color: ${props => props.timeContainerColor};
`;

export const ClockIcon = styled(AntDesign).attrs({
  name: "clockcircle",
  size: 14,
})`
  vertical-align: middle;
  color: ${props => props.timeContentColor};
`;

export const ConsultationTimeLabel = styled(QueryCategory)`
  color: ${props => props.timeContentColor};
`;