import React from "react";
import { Title } from "../Title/Style";
import { Subtitle } from "../Subtitle/Style";
import { Button, ButtonTitle } from "../Button/Style";
import { LinkSecondary } from "../Link/Style";
import { ModalConfirmationContainer } from "./Style";


export const ModalConfirmation = () => {
    return(
        <ModalConfirmationContainer>
            <Title>Cancelar consulta</Title>

            <Subtitle>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</Subtitle>

            <Button>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <LinkSecondary>Cancelar</LinkSecondary>

        </ModalConfirmationContainer>
    );
}