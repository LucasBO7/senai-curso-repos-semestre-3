import styled from "styled-components";

export const Input = styled.TextInput.attrs({ placeholderTextColor: "#34898f" })`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    color: #34898F;

    border: 2px solid #49B3BA;
    width: 90%;
    height: 53px;
    padding: 0px 16px 0px 16px;
    border-radius: 5px;
    margin-bottom: 11px;
`;

export const InputNumber = styled(Input).attrs({
    keyboardType: 'numeric',
    maxLength: 1,
})`
    width: 13%;
    padding: 0px;
    padding-bottom: 2px;
    
    text-align: center;
    font-family: 'Quicksand_600SemiBold';
    font-size: 40px;
    line-height: 52px;
<<<<<<< HEAD
=======
`;

export const PerfilInputLabel = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 16px;
`;

export const PerfilInput = styled.TextInput.attrs()`
    background-color: #F5F3F3;
    color: #33303E;
    width: 100%;
    height: 53px;
>>>>>>> b71b10770e8af2d725a0152f350bd7f09313b8bf
`;