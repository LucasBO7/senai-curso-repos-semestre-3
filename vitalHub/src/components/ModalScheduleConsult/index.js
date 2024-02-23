import React from 'react'
import { PerfilInput } from '../PerfilInput'
import { ModalContainer, OptionInputText, OptionInputContainer, ModalContent, QuestionText, OptionsList } from './Style'
import { TitleSecondary } from '../Title/Style'

export const ModalScheduleConsult = ({ isModalVisible, selectedButton }) => {
    return (
        <ModalContainer isVisible={isModalVisible}>
            <ModalContent>
                {/* Title */}
                <TitleSecondary>Agendar consulta</TitleSecondary>


                {/* Button */}
                {/* Question answers */}
                <QuestionText>Qual o nível da consulta</QuestionText>
                <OptionsList>
                    <OptionInputContainer onPress={selectedButton}>
                        <OptionInputText>Rotina</OptionInputText>
                    </OptionInputContainer>

                    <OptionInputContainer onPress={selectedButton}>
                        <OptionInputText>Exame</OptionInputText>
                    </OptionInputContainer>

                    <OptionInputContainer onPress={selectedButton}>
                        <OptionInputText>Urgência</OptionInputText>
                    </OptionInputContainer>
                </OptionsList>

                {/* Input Text */}
                <TextInput>
                    <Label></Label>

                    <Input />
                </TextInput>
            </ModalContent>
        </ModalContainer>
    )
}