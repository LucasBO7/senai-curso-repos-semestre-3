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
  background-color: ${(props) => props.situacao == "Pendentes" ? "#e8fcfd" : "#F1F0F5"};
`;

export const ClockIcon = styled(AntDesign).attrs({
  name: "clockcircle",
  size: 14,
})`
  vertical-align: middle;
  color: ${(props) => props.situacao == "Pendentes" ? "#49b3ba" : "#4E4B59"};
`;

export const ConsultationTimeLabel = styled(QueryCategory)`
  color: ${(props) => props.situacao == "Pendentes" ? "#49b3ba" : "#4E4B59"};
`;