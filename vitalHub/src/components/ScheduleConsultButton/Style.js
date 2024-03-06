import styled from "styled-components";
import { FontAwesome6 } from "@expo/vector-icons";

export const ScheduleConsultButtonContainer = styled.TouchableOpacity`
  elevation: 3;
  position: absolute;
  bottom: -50px;
  right: 0;

  justify-content: center;
  align-items: center;
  border-radius: 7px;
  
  width: 60px;
  height: 60px;

  
  background-color: #49B3BA;
`;

export const ButtonIcon = styled(FontAwesome6).attrs({
  name: "stethoscope",
  size: 32,
  color: "white",
})``;
