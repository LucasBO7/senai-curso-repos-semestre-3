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
  background-color: #e8fcfd;
`;

export const ClockIcon = styled(AntDesign).attrs({
  name: "clockcircle",
  size: 14,
  color: "#49B3BA",
})`
  vertical-align: middle;
`;

export const ConsultationTimeLabel = styled(QueryCategory)`
  color: #49b3ba;
`;
