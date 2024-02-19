import styled from "styled-components";

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  bottom: 2px;
  width: 100%;
  margin-top: 4px;
  height: 60px;
`;

export const FooterLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 14.4%;

  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: #607ec5;
`;

export const LinkIcon = styled((props) => props.iconImportName).attrs({
  name: props.iconName,
  size: 13.5,
  color: "black",
})``;

export const LinkLabel = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 12px;
`;
