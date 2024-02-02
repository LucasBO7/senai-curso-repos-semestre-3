import styled from "styled-components";

export const HeaderContainer = styled.View`
    justify-content: center;
    background-color: #FECC2B;
    height: 20%;
    border-radius: 0 0 15px 15px;

    /* box-shadow para android */
    elevation: 10;
    shadowColor: #000000;
`

export const HeaderContent = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    height: 70%;
`

export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_500Medium';
    color: #333E33;
`