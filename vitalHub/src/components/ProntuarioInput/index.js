import { View, Text } from 'react-native'
import React from 'react'
import { ProntuarioInputContainer, ProntuarioInputBox, ProntuarioLabel } from './Style'

export const ProntuarioInput = ({ labelText, placeholder, inputHeight, isMultiline }) => {
    return (
        <ProntuarioInputContainer>
            <ProntuarioLabel>{labelText}</ProntuarioLabel>
            <ProntuarioInputBox multiline={isMultiline} placeholder={placeholder} inputHeight={inputHeight} />
        </ProntuarioInputContainer>
    )
}