import styled from "styled-components";
// import { Modal } from "react-native";
import Modal from "react-native-modal";


export const ModalContainer = styled(Modal).attrs({
    // isVisible: true,
    coverScreen: false
})`
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 100%;
    /* background-color: white; */
`;

export const ModalConfirmationContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    border-radius: 15px;
    width: 92.7%;
    height: 360px;
    background-color: white;
`;