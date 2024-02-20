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

export const FooterLinkContainer = styled.TouchableHighlight.attrs({
  underlayColor: "#607EC5",
})`
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 14.4%;

  /* border-top: 2px solid #607ec5; */

  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${props => props.activatedPageBorder};
`;

export const FooterLinkContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LinkIcon = styled((props) => props.iconImportName).attrs({
  name: props => props.iconName,
  size: 13.5,
  color: "black",
})``;

export const LinkLabel = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 12px;
  color: ${props => props.activatedPageBorder};
`;
