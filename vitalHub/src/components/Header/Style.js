import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const HeaderContainer = styled.View`
    flex: 1;
`;

export const HeaderContent = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
})`
    height: 20%;
`;

export const UserImage = styled.Image`
`;

export const TitlesContainer = styled.View`
`;

export const WelcomeTitle = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color: #4E4B59;
`;

export const UserNameTitle = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: #FBFBFB;
`;