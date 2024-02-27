import styled from "styled-components";

export const Subtitle = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 16px;
  width: 90%;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
`;

export const HighlightedText = styled(Subtitle).attrs({})`
  font-family: "Quicksand_600SemiBold";
  color: #496bba;
`;

export const PatientAge = styled.Text`
  font-family: "Quicksand_400Regular";
  color: #8c8a97;
`;

export const QueryCategory = styled.Text`
  font-family: "Quicksand_600SemiBold";
  font-size: 14px;
  color: #8c8a97;
`;

export const CardSubtitle = styled(QueryCategory)`
  color: #4E4B59 !important;
`;

export const CardSubtitleSecond = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 14px;
  color: #8C8A97;
`;