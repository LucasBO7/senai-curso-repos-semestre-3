import styled from "styled-components";

export const PerfilInputContainer = styled.View`
    width: ${props => props.width};
    margin-bottom: 25px;
`;

export const PerfilInputLabel = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Input = styled.TextInput`
    background-color: #F5F3F3;
    color: #33303E;
    border-radius: 5px;
    padding: 0px 16px;
    width: 100%;
    height: 53px;
`;