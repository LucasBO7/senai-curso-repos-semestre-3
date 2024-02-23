import styled from "styled-components";
import { FontAwesome6 } from "@expo/vector-icons";

// Botão
export const Button = styled.TouchableOpacity`
  border: 1px solid transparent;
  background-color: #496bba;
  width: 90%;
  height: 44px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 15px;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-family: "MontserratAlternates_700Bold";
  text-transform: uppercase;
`;

// Botão Google
export const ButtonGoogle = styled(Button).attrs({})`
  margin-top: 0;
  background-color: #fafafa;
  border: 1px solid #496bba;
`;
export const ButtonTitleGoogle = styled(ButtonTitle).attrs({})`
  color: #496bba;
  margin-left: 10px;
`;

// Botão Sair do App
export const ButtonSecondary = styled(Button).attrs({})`
  background-color: #acabb7;
  width: ${(props) => props.btnWidth || "100%"};
`;