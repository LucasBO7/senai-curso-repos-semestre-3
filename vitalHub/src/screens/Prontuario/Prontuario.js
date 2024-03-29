import React from 'react'
import { Container, PerfilInfoContainer } from '../../components/Container/Style'
import { PerfilImage } from '../../components/PerfilImage/Style'
import { ScrollView } from 'react-native'
import { PerfilEmail, PerfilName } from '../../components/Title/Style'
import { ProntuarioInput } from '../../components/ProntuarioInput'
import { Button, ButtonSecondary, ButtonTitle } from '../../components/Button/Style'
import { LinkSecondary } from '../../components/Link/Style'

export const Prontuario = ({ navigation }) => {
    return (
        // Scroll component
        <ScrollView>
            {/* Layout grid Area */}
            <Container>
                {/* Perfil Image */}
                <PerfilImage source={require('../../assets/images/perfil-img.png')} />

                {/* Text Area */}
                <PerfilInfoContainer>
                    <PerfilName>Perfil Kosta</PerfilName>
                    <PerfilEmail>richard.kosta@gmail.com</PerfilEmail>
                </PerfilInfoContainer>

                {/* Inputs */}
                <ProntuarioInput
                    labelText="Descrição da consulta"
                    placeholder="Descrição..."
                    inputHeight="121px"
                    isMultiline={true}
                    textAlignVertical="top"
                />

                <ProntuarioInput
                    labelText="Diagnóstico do paciente"
                    placeholder="Diagnóstico..."
                    isMultiline={true}
                    textAlignVertical="center"
                />

                <ProntuarioInput
                    labelText="Prescrição médica"
                    placeholder="Prescrição médica..."
                    inputHeight="121px"
                    isMultiline={true}
                    textAlignVertical="top"
                />

                <Button btnWidth='90%'>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <ButtonSecondary btnWidth="90%">
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonSecondary>

                <LinkSecondary onPress={() => navigation.replace("ConsultasMedico")}>Cancelar</LinkSecondary>

            </Container>
        </ScrollView>
    );
}