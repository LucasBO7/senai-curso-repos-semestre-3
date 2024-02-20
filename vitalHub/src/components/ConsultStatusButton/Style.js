import styled from "styled-components";

export const ButtonContainer = styled.TouchableHighlight.attrs({
  underlayColor: "#607EC5",
})`
  justify-content: center;
  align-items: center;
  width: 31.25%;
  border-radius: 5px;
  padding: 14px 12px;
  ${props => props.isBtnActivated == false
    ? "border: 2px solid #607EC5; background-color: transparent"
    : "background-color: #496BBA;"}
`;

export const ButtonText = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 12px;
  ${props => props.isBtnActivated == false
    ? "color: #607EC5;"
    : "color: #FBFBFB;"}
`;
