import styled from "styled-components";

export const ProntuarioInputContainer = styled.View`
    width: 88.8%;
    margin-bottom: 24px
`;
export const ProntuarioLabel = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 16px;
    color: #33303E;
    margin-bottom: 12px;
`;
export const ProntuarioInputBox = styled.TextInput.attrs({ placeholderTextColor: "#34898F" })`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    line-height: 21px;

    height: ${props => props.inputHeight || "auto"};

    border-radius: 5px;
    border: 1px solid #49B3BA;
    padding: 22px 17px;

    flex: 1;
`;