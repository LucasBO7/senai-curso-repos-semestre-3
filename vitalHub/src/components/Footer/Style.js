import styled from "styled-components";
import { Entypo } from '@expo/vector-icons';

export const FooterContainer = styled.View`
    position: relative;
    bottom: -40px;
    flex-direction: row;
    width: 100%;
    border: 2px solid green;
    height: 60px;
`;

export const FooterLink = styled.TouchableOpacity`
    background-color: red;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const LinkIcon = styled(Entypo).attrs({
    name: 'calendar',
    size: 13.5,
    color: 'black'
})`
`;

export const LinkLabel = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 12px;
`;