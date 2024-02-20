import styled from "styled-components";

export const LinkMedium = styled.Text`
  font-family: "MontserratAlternates_500Medium";
  font-size: 14px;
  text-decoration: underline;
  color: #8c8a97;
  align-self: flex-start;
  margin-left: 5%;
  margin-bottom: 22px;
`;

// Botão link
export const LinkSecondary = styled(LinkMedium).attrs({})`
  font-family: "MontserratAlternates_600SemiBold";
  color: #344f8f;
  align-self: center;
  margin-left: 0;
  padding: 15px;
`;

export const LinkThird = styled.Text`
  font-family: "MontserratAlternates_500Medium";
  font-size: 12px;
  padding-top: 20px;
  color: ${(props) => props.textColor};
`;
