import React from 'react'
import { ModalContainer, OptionInputText, OptionInputContainer, ModalContent, QuestionText, OptionsList } from './Style'
import { TitleSecondary } from '../Title/Style'
import { InputTag, TextInput } from '../Input/Style'
import { Button, ButtonTitle } from '../Button/Style'
import { LinkSecondary } from '../Link/Style'

export const ModalScheduleConsult = ({ isModalVisible, selectedButton = 'rotina' }) => {
    return (
        <ModalContainer isVisible={isModalVisible}>
            <ModalContent>
                {/* Title */}
                <TitleSecondary>Agendar consulta</TitleSecondary>


                {/* Button */}
                {/* Question answers */}
                <QuestionText>Qual o nível da consulta</QuestionText>
                <OptionsList>
                    <OptionInputContainer isSelected={selectedButton == 'rotina' ? true : false}>
                        <OptionInputText isSelected={selectedButton == 'rotina' ? true : false}>Rotina</OptionInputText>
                    </OptionInputContainer>

                    <OptionInputContainer isSelected={selectedButton == 'exame' ? true : false}>
                        <OptionInputText isSelected={selectedButton == 'exame' ? true : false}>Exame</OptionInputText>
                    </OptionInputContainer>

                    <OptionInputContainer isSelected={selectedButton == 'urgencia' ? true : false}>
                        <OptionInputText isSelected={selectedButton == 'urgencia' ? true : false}>Urgência</OptionInputText>
                    </OptionInputContainer>
                </OptionsList>

                {/* Input Text */}
                <TextInput>
                    <QuestionText>Informe a localização desejada</QuestionText>

                    <InputTag placeholder="Informe a localização" />
                </TextInput>

                <Button btnWidth='100%'>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>

                <LinkSecondary>Cancelar</LinkSecondary>
            </ModalContent>
        </ModalContainer>
    )
}