import styled from "styled-components";

export const Subtitle = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    width: 90%;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
`;

export const HighlightedText = styled(Subtitle).attrs({})`
    font-family: 'Quicksand_600SemiBold';
    color: #496BBA;
`;