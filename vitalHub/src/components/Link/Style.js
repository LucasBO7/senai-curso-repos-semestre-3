import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size: 14px;
    text-decoration: underline;
    color: #8C8A97;
    align-self: flex-start;
    margin-left: 5%;
    margin-bottom: 22px;
`;

// Botão link
export const LinkSecondary = styled(LinkMedium).attrs({})`
    background-color: transparent;
    font-family: 'MontserratAlternates_600SemiBold';
    align-self: center;
    padding: 15px;
    color: #344F8F;
`;