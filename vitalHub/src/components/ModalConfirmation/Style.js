import styled from "styled-components";
import Modal from "react-native-modal";

export const ModalContainer = styled(Modal).attrs({
    coverScreen: false
})`
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 100%;
`;

export const ModalConfirmationContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    border-radius: 15px;
    width: 92.7%;
    height: ${props => props.containerHeight};
    /* height: 456px; */
    background-color: white;
`;