import Modal from "react-native-modal";
import styled from "styled-components";

// Modal
export const ModalContainer = styled(Modal).attrs({
    coverScreen: false
})`
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    margin: 0;
`;
export const ModalContent = styled.View`
    /* align-items: center; */
    background-color: white;
    width: 100%;
    height: 403px;
    padding: 28px 20px;
`;

export const QuestionText = styled.Text`
    color: #000000;
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    margin-bottom: 8px;
`;

export const OptionsList = styled.View`
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;

// 'Checkbox' Button
export const OptionInputContainer = styled.TouchableHighlight`
    /* background-color: orange; */
    justify-content: center;
    align-items: center;
    padding: 0px 17px;
    height: 50px;
    /* width: 28%; */

    border: 2px solid #60BFC5;
    border-radius: 5px;
`;

// 'CheckBux' Button -> Text
export const OptionInputText = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    color: #34898F;
    line-height: 21px;
    `;