import styled from "styled-components";
import { Subtitle } from "../Subtitle/Style";

export const RowContainer = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: -15px;
  padding: 0px 6.5%;
  width: 100%;
`;

export const SubtitleConsultModal = styled(Subtitle).attrs({})`
  width: fit-content;
`;
